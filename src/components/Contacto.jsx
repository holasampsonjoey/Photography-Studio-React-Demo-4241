import React, { useState } from 'react';
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon
} from './Icons';
import { Placeholder, Reveal } from './Shared';

const initialForm = {
  nombre: '',
  whatsapp: '',
  tipo: 'Newborn',
  fecha: '',
  mensaje: ''
};

export default function Contacto() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.nombre.trim()) nextErrors.nombre = 'Escribe tu nombre.';
    if (!form.whatsapp.trim()) nextErrors.whatsapp = 'Escribe tu número de WhatsApp.';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    // TODO: POST to a Cloudflare Pages Function.
    // Writes one row to a Google Sheet and sends a WhatsApp
    // notification to the studio. Payload: all form fields + timestamp.
    console.log({ ...form, timestamp: new Date().toISOString() });
    setSubmitted(true);
  };

  return (
    <Reveal as="section" id="contacto" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <header className="section-title">
            <p className="eyebrow">CONTACTO</p>
            <h2>Platiquemos tu sesión.</h2>
            <p className="lede">Llena esto y te contesto por WhatsApp con los paquetes y las fechas que tengo libres.</p>
          </header>

          {submitted ? (
            <div className="confirmation-panel" aria-live="polite">
              Gracias, ya me llegó. Te escribo por WhatsApp muy pronto.
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <Field label="Tu nombre" error={errors.nombre}>
                <input name="nombre" type="text" required value={form.nombre} onChange={update} />
              </Field>
              <Field label="WhatsApp" error={errors.whatsapp}>
                <input name="whatsapp" type="tel" required value={form.whatsapp} onChange={update} />
              </Field>
              <Field label="Tipo de sesión">
                <select name="tipo" value={form.tipo} onChange={update}>
                  <option>Newborn</option>
                  <option>Smash cake</option>
                  <option>Bautizo o confirmación</option>
                  <option>Set temático</option>
                  <option>Todavía no sé</option>
                </select>
              </Field>
              <Field label="Fecha de nacimiento o fecha probable">
                <input name="fecha" type="date" value={form.fecha} onChange={update} />
              </Field>
              <Field label="Cuéntame">
                <textarea name="mensaje" rows="4" value={form.mensaje} onChange={update} />
              </Field>
              <button className="button button-whatsapp" type="submit">Enviar</button>
            </form>
          )}

          {/* TODO: embed Cal.com here, for fixed-date sessions only.
          Newborn is never self-scheduled — it uses the form above. */}
          <div className="calendar-placeholder">Calendario — smash cake y bautizo</div>
        </div>

        <aside className="studio-card">
          <Placeholder
            alt="Interior del estudio fotográfico infantil"
            className="studio-image"
          />
          <h3>Anahi Carrillo Fotografía</h3>
          <p className="studio-subtitle">Estudio fotográfico infantil</p>
          <ul className="studio-details">
            <li>
              <PhoneIcon className="detail-icon" />
              <a href="tel:+528121750830">81 2175 0830</a>
            </li>
            <li>
              <PinIcon className="detail-icon" />
              <span>El Cercado, Santiago, Nuevo León</span>
            </li>
            <li>
              <ClockIcon className="detail-icon" />
              <span>Sesiones con cita previa</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://www.facebook.com/anahicarrillofoto/" aria-label="Facebook de Anahi Carrillo Fotografía">
              <FacebookIcon className="social-icon" />
            </a>
            <a href="https://www.instagram.com/anahicarrillofoto/" aria-label="Instagram de Anahi Carrillo Fotografía">
              <InstagramIcon className="social-icon" />
            </a>
          </div>
        </aside>
      </div>
    </Reveal>
  );
}

function Field({ label, error, children }) {
  const input = React.Children.only(children);
  const id = `contact-${input.props.name}`;

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {React.cloneElement(input, {
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? `${id}-error` : undefined
      })}
      {error && <p className="error-text" id={`${id}-error`}>{error}</p>}
    </div>
  );
}
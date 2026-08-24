import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { Reveal, SectionTitle } from './Shared';

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const addDays = (date, days) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const addMonths = (date, amount) => {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
};

const formatDate = (date, year = false) => {
  const formatted = `${date.getDate()} de ${months[date.getMonth()]}`;
  return year ? `${formatted} de ${date.getFullYear()}` : formatted;
};

function getResult(birth, days) {
  const nb1 = addDays(birth, 5);
  const nb2 = addDays(birth, 12);
  const sc1 = addMonths(birth, 10);
  const sc2 = addMonths(birth, 11);
  const cumple = addMonths(birth, 12);
  const fecha = formatDate(birth, true);

  if (days < 0) return {
    kicker: 'AÚN NO NACE',
    heading: `Del ${formatDate(nb1)} al ${formatDate(nb2)}`,
    body: 'Esa es la ventana ideal para la sesión de recién nacido, cuando duerme más profundo y se deja acomodar. Como casi nunca nacen el día exacto, lo que se aparta es la semana y ajustamos el día cuando llegue.',
    message: `Hola Anahi, mi bebé nace aproximadamente el ${fecha}. Quiero apartar la semana del ${formatDate(nb1)} al ${formatDate(nb2)}.`
  };

  if (days <= 14) return {
    kicker: 'ESTÁS EN LA VENTANA',
    heading: `Tienes hasta el ${formatDate(nb2)}`,
    body: 'Esta es la mejor edad para las fotos envueltas y las poses acurrucadas. La ventana es corta, así que entre antes escribas, mejor.',
    message: `Hola Anahi, mi bebé nació el ${fecha}. Quiero ver si todavía hay lugar esta semana.`
  };

  if (days < 60) return {
    kicker: 'YA PASÓ LA VENTANA NEWBORN',
    heading: 'Todavía se pueden hacer fotos preciosas',
    body: 'A esta edad ya no se logran las poses envueltas de recién nacido, pero hay opciones bonitas para bebés de estas semanas. Pregúntame qué se puede hacer con su edad.',
    message: `Hola Anahi, mi bebé nació el ${fecha}. ¿Qué tipo de sesión me recomiendas para su edad?`
  };

  if (days < 300) return {
    kicker: 'TU PRÓXIMA VENTANA',
    heading: `Del ${formatDate(sc1)} al ${formatDate(sc2)}`,
    body: `Es la ventana del smash cake. Se agenda entre los 10 y 11 meses para que las fotos queden editadas y listas antes de la fiesta del primer año, el ${formatDate(cumple)}.`,
    message: `Hola Anahi, mi bebé nació el ${fecha}. Quiero apartar su sesión de smash cake para ${formatDate(sc1)}.`
  };

  if (days <= 380) return {
    kicker: 'ES EL MOMENTO',
    heading: 'Smash cake, ahora',
    body: `Estás justo en la edad. Si agendamos pronto, las fotos quedan listas antes de la fiesta del primer año, el ${formatDate(cumple)}.`,
    message: `Hola Anahi, mi bebé nació el ${fecha}. Quiero agendar su smash cake lo antes posible.`
  };

  return {
    kicker: 'MÁS DE UN AÑO',
    heading: 'Sets temáticos y sesiones de niños',
    body: 'Ya pasó el primer año, pero hago sesiones para niños más grandes con sets armados por tema. Cuéntame qué tienes en mente.',
    message: `Hola Anahi, mi hijo nació el ${fecha}. ¿Qué opciones tienes para su edad?`
  };
}

export default function Calculadora() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const calculate = (event) => {
    event.preventDefault();
    if (!value) {
      setError('Pon una fecha para calcular.');
      setResult(null);
      return;
    }

    const birth = new Date(`${value}T12:00:00`);
    if (Number.isNaN(birth.getTime())) {
      setError('Esa fecha no es válida.');
      setResult(null);
      return;
    }

    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const days = Math.round((today - birth) / 86400000);
    setResult(getResult(birth, days));
  };

  const submitGuide = (event) => {
    event.preventDefault();
    if (!email) return;

    // TODO: POST to a Cloudflare Pages Function that appends to a sheet
    // and sends the guide. Payload: { email, fechaNacimiento, ventana }
    console.log({
      email,
      fechaNacimiento: value,
      ventana: result?.heading
    });
    setSent(true);
  };

  return (
    <Reveal as="section" id="calculadora" className="section section-alt">
      <div className="container calculator-container">
        <SectionTitle
          eyebrow="CALCULADORA"
          title="¿Cuándo le toca su sesión?"
          lede="Pon la fecha de nacimiento de tu bebé. Si todavía no nace, pon la fecha probable de parto."
        />

        <form className="calculator-form" onSubmit={calculate} noValidate>
          <div className="date-field">
            <label htmlFor="birth-date">Fecha de nacimiento o fecha probable</label>
            <input
              id="birth-date"
              type="date"
              value={value}
              aria-describedby={error ? 'calculator-error' : undefined}
              aria-invalid={Boolean(error)}
              onChange={(event) => {
                setValue(event.target.value);
                setError('');
                setResult(null);
                setSent(false);
              }}
            />
            {error && <p id="calculator-error" className="error-text">{error}</p>}
          </div>
          <button className="button button-accent" type="submit">Ver mi ventana</button>
        </form>

        {result && (
          <article className="result-card" aria-live="polite">
            <p className="result-kicker">{result.kicker}</p>
            <h3>{result.heading}</h3>
            <p>{result.body}</p>
            <a
              className="button button-whatsapp"
              href={`https://wa.me/528121750830?text=${encodeURIComponent(result.message)}`}
            >
              <WhatsAppIcon className="button-icon" />
              Escribirle a Anahi
            </a>

            <div className="guide">
              <p>¿Quieres la guía de preparación completa? Te la mando por correo.</p>
              {sent ? (
                <p className="success-text">Listo, te la mando en un momento.</p>
              ) : (
                <form className="guide-form" onSubmit={submitGuide}>
                  <label className="sr-only" htmlFor="guide-email">Correo electrónico</label>
                  <input
                    id="guide-email"
                    type="email"
                    required
                    value={email}
                    placeholder="Tu correo electrónico"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button className="button button-outline" type="submit">Enviar guía</button>
                </form>
              )}
            </div>
          </article>
        )}
      </div>
    </Reveal>
  );
}
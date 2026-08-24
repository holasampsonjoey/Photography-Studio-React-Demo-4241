import React from 'react';
import { Placeholder, Reveal, SectionTitle } from './Shared';

const safetyItems = [
  'Nunca dejo al bebé sin apoyo. En las poses que lo necesitan siempre hay una mano cerca, dentro o fuera del cuadro.',
  'La sesión va al ritmo del bebé, no al del reloj. Si necesita comer, cambiarse o dormir otro rato, paramos.',
  'El estudio se mantiene tibio para que el bebé esté cómodo sin ropa.',
  'Las envolturas, telas y accesorios se lavan y desinfectan entre una sesión y otra.',
  'Si una pose no le acomoda al bebé, no se fuerza. Buscamos otra.'
];

export default function Seguridad() {
  return (
    <Reveal as="section" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="SEGURIDAD"
          title="La seguridad del bebé va primero, siempre."
          lede="Es lo que más me preguntan las mamás primerizas, y me parece la pregunta correcta."
        />
        <div className="safety-grid">
          <Placeholder
            alt="Sesión segura y tranquila de un bebé recién nacido"
            className="safety-image"
          />
          <div>
            <ul className="safety-list">
              {safetyItems.map((item) => (
                <li key={item}><span aria-hidden="true">+</span>{item}</li>
              ))}
            </ul>
            <div className="safety-note">
              Muchas de las fotos que ves en redes — el bebé apoyando la carita en las manitas, por ejemplo — no son una sola toma. Se arman con dos fotos y edición, precisamente porque no es seguro dejar al bebé así. Si te da curiosidad cuál es cuál, pregúntame.
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
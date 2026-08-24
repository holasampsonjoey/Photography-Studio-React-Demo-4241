import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { Reveal, SectionTitle } from './Shared';

const questions = [
  ['¿Cuánto dura la sesión?', 'Una sesión de recién nacido puede durar entre dos y tres horas. Suena mucho, pero la mayor parte del tiempo es darle de comer, cambiarlo y esperar a que se acomode. La foto en sí toma segundos. Ven sin prisa.'],
  ['¿Qué tengo que llevar?', 'Nada. Yo tengo las envolturas, los gorritos, las canastas y los accesorios. Si hay algo con valor sentimental que quieras incluir — una manta de la abuela, un juguete — tráelo y lo integramos.'],
  ['¿Cómo preparo al bebé?', 'Dale de comer completo justo antes de salir de casa. Un bebé lleno y con sueño hace que todo salga mejor. Si usa chupón, tráelo aunque no lo use mucho, ayuda a que se acomode.'],
  ['¿Qué nos ponemos si vamos a salir en las fotos?', 'Ropa lisa en tonos neutros: crema, beige, gris o blanco. Sin logos ni estampados grandes. La idea es que la atención quede en el bebé y no en la ropa.'],
  ['¿Pueden venir los hermanitos?', 'Claro. Las fotos con hermanitos las hacemos al principio, mientras todavía traen paciencia, y después alguien se los puede llevar. La sesión completa es larga para un niño chiquito.'],
  ['¿Qué pasa si el bebé nace antes o después de la fecha?', 'No hay problema, casi nunca nacen el día que dijeron. Aparto la semana aproximada y ajustamos el día exacto cuando nazca. Avísame en cuanto llegue y acomodamos.'],
  ['¿Cuántas fotos me entregas y en cuánto tiempo?', 'Te entrego una galería con una selección editada a mano, no todas las tomas. El número de fotos y el tiempo de entrega dependen del paquete — pregúntame por WhatsApp y te digo exactamente.']
];

export default function Preguntas() {
  const [open, setOpen] = useState(0);

  return (
    <Reveal as="section" id="preguntas" className="section">
      <div className="container faq-container">
        <SectionTitle
          eyebrow="PREGUNTAS FRECUENTES"
          title="Lo que casi siempre me preguntan."
          lede="Si tu duda no está aquí, mándame un mensaje y con gusto te explico."
        />
        <div className="accordion">
          {questions.map(([question, answer], index) => {
            const expanded = open === index;
            return (
              <div className={`accordion-item ${expanded ? 'is-open' : ''}`} key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`answer-${index}`}
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span>{question}</span>
                    <span className="accordion-symbol" aria-hidden="true">{expanded ? '−' : '+'}</span>
                  </button>
                </h3>
                <div id={`answer-${index}`} className="accordion-panel">
                  <div><p>{answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="faq-action">
          <a className="button button-whatsapp" href="https://wa.me/528121750830">
            <WhatsAppIcon className="button-icon" />
            Pregúntame lo que sea
          </a>
        </div>
      </div>
    </Reveal>
  );
}
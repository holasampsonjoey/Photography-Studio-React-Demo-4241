import React from 'react';
import { Reveal, SectionTitle } from './Shared';

const moments = [
  {
    title: 'Aparta durante el embarazo',
    body: 'La sesión de recién nacido se hace idealmente entre los 5 y los 12 días de nacido, que es cuando el bebé duerme más profundo y se deja acomodar. Como la fecha exacta no se sabe hasta el final, lo mejor es apartar el lugar desde el embarazo y ajustamos el día cuando nazca.'
  },
  {
    title: 'Entre los 10 y 11 meses',
    body: 'Si agendamos a esa edad, las fotos quedan editadas y listas justo para la fiesta del primer año. Ya se sientan solos, agarran el pastel, y todavía no caminan tanto como para no dejarse fotografiar.'
  },
  {
    title: 'En cuanto tengas la fecha de la ceremonia',
    body: 'Estas fechas se llenan rápido, sobre todo en temporada. Con avisarme apenas la tengas, aseguramos el día.'
  }
];

export default function CuandoAgendar() {
  return (
    <Reveal as="section" id="cuando-agendar" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="CUÁNDO AGENDAR"
          title="El momento importa más de lo que parece."
          lede="Cada tipo de sesión tiene una ventana ideal. Estas son las que recomiendo, para que no se te pase."
        />
        <div className="moments">
          {moments.map((moment, index) => (
            <article className="moment-row" key={moment.title}>
              <div className="moment-number">0{index + 1}</div>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
import React from 'react';
import { Placeholder, Reveal, SectionTitle } from './Shared';

const services = [
  {
    title: 'Newborn',
    body: 'Sesión de recién nacido, hecha con calma y con toda la paciencia que necesita un bebé de días. Envolturas, canastas y sets suaves preparados con anticipación.',
    alt: 'Sesión de recién nacido con envolturas y un set suave'
  },
  {
    title: 'Smash Cake',
    body: 'El primer añito, con pastel y sin reglas. Un set armado alrededor del tema que ustedes elijan, y libertad total para que el bebé lo disfrute.',
    alt: 'Sesión de primer cumpleaños con pastel y set temático'
  },
  {
    title: 'Bautizo y confirmación',
    body: 'Fotos de la ceremonia y sesión en estudio con el ropón o el vestido. Para que el recuerdo quede más allá del día.',
    alt: 'Retrato de bautizo o confirmación en estudio'
  },
  {
    title: 'Sets temáticos',
    body: 'Escenarios armados por temporada y por tema. Si tienes una idea en mente, la platicamos y la montamos.',
    alt: 'Set temático infantil preparado en estudio'
  }
];

export default function Servicios() {
  return (
    <Reveal as="section" id="servicios" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="SERVICIOS"
          title="Cada etapa tiene su momento."
          lede="Cuatro tipos de sesión, todas en estudio, con sets preparados para cada edad."
        />
        <div className="services-grid">
          {services.map((service) => {
            const message = encodeURIComponent(`Hola Anahi, quiero preguntar por la sesión de ${service.title}.`);
            return (
              <article className="service-card" key={service.title}>
                <Placeholder alt={service.alt} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <a href={`https://wa.me/528121750830?text=${message}`}>
                    Preguntar por esta sesión →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
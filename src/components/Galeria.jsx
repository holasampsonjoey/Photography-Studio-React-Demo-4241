import React from 'react';
import { InstagramIcon } from './Icons';
import { Placeholder, Reveal, SectionTitle } from './Shared';

// TODO: replace mockFeed with the Instagram feed.
// Shape: { id, mediaUrl, permalink, aspect, alt }
// Source options: Instagram Basic Display API, or a third-party embed widget.
const mockFeed = [
  { id: 1, aspect: 'portrait', alt: 'Retrato de bebé recién nacido en estudio' },
  { id: 2, aspect: 'square', alt: 'Detalle de manos de un bebé durante su sesión' },
  { id: 3, aspect: 'landscape', alt: 'Set infantil preparado para una sesión temática' },
  { id: 4, aspect: 'square', alt: 'Retrato de primer cumpleaños en estudio' },
  { id: 5, aspect: 'tall', alt: 'Bebé posando en un set suave y cálido' },
  { id: 6, aspect: 'landscape', alt: 'Sesión de smash cake con decoración temática' },
  { id: 7, aspect: 'portrait', alt: 'Retrato infantil con vestuario de bautizo' },
  { id: 8, aspect: 'square', alt: 'Accesorios preparados para una sesión newborn' },
  { id: 9, aspect: 'wide', alt: 'Escenario de temporada para una sesión infantil' }
];

export default function Galeria() {
  return (
    <Reveal as="section" id="galeria" className="section">
      <div className="container">
        <SectionTitle eyebrow="GALERÍA" title="Trabajo reciente." />
        <div className="gallery-grid">
          {mockFeed.map((item) => (
            <Placeholder
              key={item.id}
              alt={item.alt}
              className={`gallery-item gallery-${item.aspect}`}
            />
          ))}
        </div>
        <div className="gallery-link">
          <a href="https://www.instagram.com/anahicarrillofoto/">
            <InstagramIcon className="inline-icon" />
            Ver más en Instagram →
          </a>
        </div>
      </div>
    </Reveal>
  );
}
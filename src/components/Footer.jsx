import React from 'react';

const links = [
  ['Servicios', 'servicios'],
  ['Galería', 'galeria'],
  ['Cuándo agendar', 'cuando-agendar'],
  ['Preguntas', 'preguntas'],
  ['Contacto', 'contacto']
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <span>Anahi Carrillo Fotografía</span>
            <small>El Cercado, Santiago, Nuevo León</small>
          </div>
          <nav className="footer-links" aria-label="Navegación del pie de página">
            {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        </div>
        <p className="copyright">© 2026 Anahi Carrillo Fotografía</p>
      </div>
    </footer>
  );
}
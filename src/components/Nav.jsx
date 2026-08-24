import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';

const links = [
  ['Servicios', 'servicios'],
  ['Galería', 'galeria'],
  ['Cuándo agendar', 'cuando-agendar'],
  ['Preguntas', 'preguntas'],
  ['Contacto', 'contacto']
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="nav-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span>Anahi Carrillo</span>
          <small>FOTOGRAFÍA INFANTIL</small>
        </a>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="button button-whatsapp nav-whatsapp" href="https://wa.me/528121750830">
            <WhatsAppIcon className="button-icon" />
            <span>WhatsApp</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
import React from 'react';
import { WhatsAppIcon } from './Icons';
import { Placeholder, Reveal } from './Shared';

export default function Hero() {
  return (
    <Reveal as="header" id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">SANTIAGO, NUEVO LEÓN</p>
          <h1>Las primeras fotos que van a durar toda la vida.</h1>
          <p className="hero-lede">
            Estudio fotográfico infantil especializado en recién nacidos y primer añito. Sets temáticos, sesiones tranquilas y sin prisas, en El Cercado.
          </p>
          <div className="hero-actions">
            <a className="button button-whatsapp" href="https://wa.me/528121750830">
              <WhatsAppIcon className="button-icon" />
              Agenda por WhatsApp
            </a>
            <a className="button button-outline" href="#calculadora">
              ¿Cuándo le toca su sesión?
            </a>
          </div>
          <p className="hero-note">Respondo personalmente. Pregunta por los paquetes disponibles.</p>
        </div>

        <div className="hero-images">
          <Placeholder
            alt="Retrato vertical de una sesión infantil en estudio"
            className="hero-main-image"
          />
          <Placeholder
            alt="Detalle de una sesión de recién nacido"
            className="hero-small-image"
          />
        </div>
      </div>
    </Reveal>
  );
}
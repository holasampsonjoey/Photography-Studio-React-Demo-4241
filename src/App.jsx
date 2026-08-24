import React from 'react';
import Calculadora from './components/Calculadora';
import Contacto from './components/Contacto';
import CuandoAgendar from './components/CuandoAgendar';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Preguntas from './components/Preguntas';
import Seguridad from './components/Seguridad';
import Servicios from './components/Servicios';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Galeria />
        <Calculadora />
        <CuandoAgendar />
        <Seguridad />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
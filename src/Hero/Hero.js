import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className="hero_wrapper">
        <h1 className="hero_slogan">DSGVO konforme Websites für Verbände</h1>
        <div className="hero_buttons">
          <button className="cta_filled hero-cta">
            Termin vereinbaren
            <img src="https://res.cloudinary.com/dmbqeteuw/image/upload/v1623599299/arrow-white-kojo_k82dfd.svg" alt="" />
          </button>
          <button className="cta_outlined">
            Website Konfigurator
            <img src="https://res.cloudinary.com/dmbqeteuw/image/upload/v1623599299/arrow-green-kojo_wglw1g.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react';
import './Hero.css';
import ReactTypingEffect from 'react-typing-effect';
import ButtonFilled from '../Buttons/ButtonFilled';
import ButtonOutlined from '../Buttons/ButtonOutlined';

function Hero() {
  return (
    <div className='hero'>
      <div className="hero_wrapper">
        <h1 className="hero_slogan">DSGVO konforme Websites für</h1>

        <ReactTypingEffect
          text={["Verbände", "Institute", "Organisationen"]}
          speed={100}
          eraseSpeed={100}
          eraseDelay={1000}
          typingDelay={1000}
        />

        <div className="hero_buttons">
          <ButtonFilled title='Termin vereinbaren' />
          <ButtonOutlined title='Website Konfigurator' />
        </div>
      </div>
    </div>
  )
}

export default Hero

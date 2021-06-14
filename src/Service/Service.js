import React from 'react';
import './Service.css';
import Step from './Step';
import ButtonOutlined from '../Buttons/ButtonOutlined';
import SectionHeadline from '../SectionHeadline/SectionHeadline';

function Service() {
  return (
    <div className='service'>
      <div className="service_wrapper">
        <SectionHeadline title='Website Konfigurator //' text='Ihre individuelle Website in 5 Minuten' />
        <div className="steps_wrapper">
          <Step title='Konfigurator' color='#68E1BC' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.' />
          <Step title='Design' color='#E94E29' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.' />
          <Step title='Entwicklung' color='#063DFF' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.' />
          <Step title='Übergabe' color='#111111' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.' />
        </div>
        <ButtonOutlined title='Website Konfigurator' />
      </div>
    </div>
  )
}

export default Service;

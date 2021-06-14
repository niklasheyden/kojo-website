import React from 'react';
import './Step.css';

function Step({color, title, text}) {
  return (
    <div className='step'>
      <div className="step_wrapper">
        <div className="dotdash_wrapper">
          <div className="dot" style={{backgroundColor: color}}></div>
          <div className="dash"></div>
        </div>
        <h3 className='step_title'>{title}</h3>
        <p className="step_text">{text}</p>
      </div>
    </div>
  )
}

export default Step

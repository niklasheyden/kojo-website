import React from 'react';
import './SectionHeadline.css';

function SectionHeadline({title, text}) {
  return (
    <div className='section_headline'>
      <div className='headline_wrapper'>
        <h2 className='section_title'>{title}</h2>
        <h4 className='headline_text'>{text}</h4>
      </div>
    </div>
  )
}

export default SectionHeadline

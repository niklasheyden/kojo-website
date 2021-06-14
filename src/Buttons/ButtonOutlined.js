import React from 'react';
import './ButtonOutlined.css';

function ButtonOutlined({title}) {
  return (
    <div className='button_outlined'>
      <button>
        {title}
        <img src="https://res.cloudinary.com/dmbqeteuw/image/upload/v1623599299/arrow-green-kojo_wglw1g.svg" alt="" />
      </button>
    </div>
  )
}

export default ButtonOutlined

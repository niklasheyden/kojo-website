import React from 'react';
import './ButtonFilled.css';

function ButtonFilled({title}) {
  return (
    <div className='button_filled'>
      <button>
        {title}
        <img src="https://res.cloudinary.com/dmbqeteuw/image/upload/v1623599299/arrow-white-kojo_k82dfd.svg" alt="" />
      </button>
    </div>
  )
}

export default ButtonFilled

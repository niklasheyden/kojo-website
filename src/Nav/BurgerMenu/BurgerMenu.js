import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {

  let active = false;

  const toggle = (props) => {
    let burgermenu = document.querySelector('.burger_menu')
    burgermenu.classList.toggle('active')
    console.log(burgermenu)
  }

  return (
    <div className='burger_menu' onClick={toggle}>
      <div className='burger_line top'></div>
      <div className='burger_line middle'></div>
      <div className='burger_line bottom'></div>
    </div>
  )
}

export default BurgerMenu;

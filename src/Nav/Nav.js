import React from 'react';
import Logo from './Logo/Logo';
import './Nav.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Nav() {
  return (
    <div className='nav'>
      <div className='nav_contents'>
        <Logo />
        <BurgerMenu />
      </div>
    </div>
  )
}

export default Nav

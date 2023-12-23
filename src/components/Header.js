import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
}
  export default Header;
import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="logo">Gorli</h1>

        <nav className="nav">
          <ul className="nav__list">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

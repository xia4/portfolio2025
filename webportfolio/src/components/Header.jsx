import React, { useState } from 'react';
import '../styles/Header.scss';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* PC Header */}
      <header id='site_header' className={`header ${isMenuOpen ? '' : 'mobile_menu_hide'}`}>
        <div className="header_inner">
          <div className="photo_box">
            <img src={require('../assets/proflie_img.png')} alt="profile" />
          </div>
          <div className="name_box">
            <h1 className="name">Alex Smith</h1>
          </div>
          <ul className="nav_menu">
            <li className="active">
              <a href="#home"><i class="menu_icon ri-home-3-line"></i>Home</a>
            </li>
            <li>
              <a href="#about me"><i class="menu_icon ri-user-line"></i>About Me</a>
            </li>
            <li>
              <a href="#resume"><i class="menu_icon ri-id-card-line"></i>Resume</a>
            </li>
            <li>
              <a href="#portfolio"><i class="menu_icon ri-briefcase-line"></i>Portfolio</a>
            </li>
            <li>
              <a href="#contact"><i class="menu_icon ri-mail-line"></i>Contact</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile_header mobile_visible">
        <div className="mobile_name">
          <h1 className="name">Alex Smith</h1>
        </div>
        <a className='menu_toggle mobile_visible' onClick={handleToggleMenu}>
          <i class="ri-bar-chart-horizontal-line"></i>
        </a>
      </header>
    </>
  );
};

export default Header;

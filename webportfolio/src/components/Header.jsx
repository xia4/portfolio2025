import React, { useState } from 'react';
import '../styles/Header.scss';

const Header = ({ setActiveSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuId) => {
    if (activeSection !== menuId) {
      setActiveSection(menuId);
      
    }
    setIsMenuOpen(false);
  };
  

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'ri-home-3-line' },
    { id: 'about', label: 'About Me', icon: 'ri-user-line' },
    { id: 'resume', label: 'Resume', icon: 'ri-id-card-line' },
    { id: 'portfolio', label: 'Portfolio', icon: 'ri-briefcase-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' },
  ];

  return (
    <>
      {/* PC Header */}
      <header id='site_header' className={`header ${isMenuOpen ? '' : 'mobile_menu_hide'}`}>
        <div className="header_inner">
          <div className="photo_box">
            <img src={require('../assets/proflie_img.png')} alt="profile" />
          </div>
          <div className="name_box">
            <h1 className="name">Lee Hyeon Jun</h1>
          </div>
          <ul className="nav_menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleMenuClick(item.id)}
              >
                <p>
                  <i className={`menu_icon ${item.icon}`}></i>
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile_header mobile_visible">
        <div className="mobile_name">
          <h1 className="name">Lee Hyeon Jun</h1>
        </div>
        <a className='menu_toggle mobile_visible' onClick={handleToggleMenu}>
          <i className="ri-bar-chart-horizontal-line"></i>
        </a>
      </header>
    </>
  );
};

export default Header;

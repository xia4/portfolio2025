import React, { useState, useEffect } from 'react';
import './styles/Common.scss';
import './styles/reset.scss';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  const [active, setActive] = useState('home');
  const [prev, setPrev] = useState(null);

  const sectionEnterMap = {
    home: 'zoom-in',
    about: 'slide-from-right',
    resume: 'slide-from-left',
    portfolio: 'slide-from-bottom',
    contact: 'slide-from-top',
  };
  

  const handleSetActiveSection = (section) => {
    if (section !== active) {
      setPrev(active);
      setActive(section);
    }
  };

  useEffect(() => {
    if (prev) {
      const timeout = setTimeout(() => {
        setPrev(null);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [prev]);

  const renderSection = (id, Component, noBg = false) => {
    const isActive = id === active;
    const isPrev = id === prev;

    let className = 'pt-page';
    if (noBg) className += ' section_without_bg';
    if (isPrev) className += ' pt-page-exit';
    if (isActive) className += ` pt-page-current ${sectionEnterMap[id]}`;

    return (
      <section key={id} id={id} className={className}>
        <Component />
      </section>
    );
  };

  return (
    <>
      <Header 
  setActiveSection={handleSetActiveSection} 
  activeSection={active}
/>

      <div className="site_main">
        <div className="pt-wrapper">
          <div className="subpages">
            {renderSection('home', Home, true)}
            {renderSection('about', About)}
            {renderSection('resume', Resume)}
            {renderSection('portfolio', Portfolio)}
            {renderSection('contact', Contact)}

          </div>
        </div>
      </div>
    </>
  );
};

export default App;

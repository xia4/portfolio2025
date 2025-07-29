import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import About from './components/About';
import './styles/reset.scss'

function App() {
  return (
    <>
      <Header />
      <div className="site_main">
        <div className="pt-wrapper">
          <div className="subpages">
            <Main />
            <About/>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

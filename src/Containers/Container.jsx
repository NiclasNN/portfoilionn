import React from 'react';
import './container.css';              // Importera CSS för Container-komponenten
import About from '../aboutme/About';  // Importera About-komponenten
import Projects from '../myprojects/Projects';  // Importera Projects-komponenten
import Codelanguage from '../codelanguages/Codelanguage';  // Importera Codelanguage-komponenten
import Footer from "../Footer.jsx";    // Importera Footer-komponenten

const Container = ({ children, language }) => {
  return (
    <div className="container">
      <div className="boxes">
        <div id="boxen2">
          <h2>Niclas Norman</h2>
          <h1>{language === 'sv' ? 'Frontend utvecklare' : 'Frontend Developer'}</h1>
        </div>
        <div id="boxen">
          <img src="/jag.png" alt="Bild på mig" className="my-image" />
          {children}
        </div>
      </div>
      <About language={language} />
      <Codelanguage language={language} />
      <Projects language={language} />
      <div id="contactme">
        <a href="mailto:niclasnorman1@hotmail.se">
          <h3>{language === 'sv' ? 'Kontakta mig' : 'Contact me'}</h3>
        </a>
      </div>
      <Footer language={language} />  {/* Skicka language-prop till Footer */}
    </div>
  );
};

export default Container;

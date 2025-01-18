import React, { useEffect } from 'react';
import './container.css'; // Importera CSS för Container-komponenten
import About from '../aboutme/About'; // Importera About-komponenten
import Projects from '../myprojects/Projects'; // Importera Projects-komponenten
import Footer from "../Footer.jsx"; // Importera Footer-komponenten
import SocialIcons from "../SocialIcons"; // Importera SocialIcons-komponenten
import Service from '../service/'; // Importera Service-komponenten

const Container = ({ children, language }) => {
  useEffect(() => {
    const element = document.getElementById('boxen2');
    element.classList.add('slide-in');
  }, []);

  return (
    <div className="container">
      <div className="boxes">
        <div id="boxen2">
          <h2>Niclas Norman</h2>
          <h1>{language === 'sv' ? 'Frontend utvecklare' : 'Frontend Developer'}</h1>
        </div>
        <div id="boxen">
          <div className="blob">
            <img 
              src="/jag.png" 
              alt="Bild på mig" 
              className="profile-img" 
            />
          </div>
          {children}
        </div>
      </div>

      <div className="shadow-box">
        <SocialIcons />
        <About language={language} />
        <div className="service-section">
          <Service language={language} />
        </div>
        <Projects language={language} />
      </div>

      <div id="contactme">
        <a href="mailto:niclasnorman1@hotmail.se">
          <h3>{language === 'sv' ? 'Kontakta mig' : 'Contact me'}</h3>
        </a>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default Container;



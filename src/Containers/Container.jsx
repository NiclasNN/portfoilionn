import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Bubblan.json'; // Justera sökvägen till din JSON-fil
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
          <div className="my-image" style={{ position: 'relative', width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden', margin: 'auto' }}>
            <Lottie 
              animationData={animationData} 
              loop={true} 
              autoplay={true} 
              style={{ 
                width: '120%', 
                height: '120%', 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                zIndex: 1 
              }} 
            />
            <img 
              src="/jag.png" 
              alt="Bild på mig" 
              style={{ 
                position: 'relative', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '65%', 
                height: 'auto', 
                borderRadius: '50%', 
                zIndex: 2 
              }} 
            />
          </div>
          {children}
        </div>
      </div>

      {/* Omslutande div med skugga runt SocialIcons, About, Service och Projects */}
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
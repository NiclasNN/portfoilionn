import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/Animation.json'; // Kontrollera att sökvägen är korrekt
import './service.css';

const Service = ({ language }) => {
  return (
    <section className="service-section">
      <div className="service-container">
      <div className="image-column">
          <Lottie animationData={animationData} loop={true} className="animated-image" />
        </div>
        <div className="text-column">
          <h2>{language === 'sv' ? 'Specialerbjudande' : 'Special Offer'}</h2>
          <p className="service-description">
            {language === 'sv'
              ? 'Just nu erbjuder jag mina webbutvecklingstjänster till ett rabatterat pris!'
              : 'I am currently offering my web development services at a discounted rate!'}
          </p>
          <div className="price-container">
            <span className="old-price">500 kr</span>
            <span className="new-price">100 kr</span>
            <span className="price-unit">/ {language === 'sv' ? 'timme' : 'hour'}</span>
          </div>
          <p className="limited-time">
            {language === 'sv'
              ? 'Erbjudandet gäller för en begränsad tid. Kontakta mig idag för att boka dina första timmar!'
              : 'This offer is valid for a limited time. Contact me today to book your first hours!'}
          </p>
          <a href="mailto:niclasnorman1@hotmail.se" className="contact-button">
            {language === 'sv' ? 'Kontakta mig' : 'Contact Me'}
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Service;

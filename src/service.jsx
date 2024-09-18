import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import DiscountData from '../public/Discount.json'; // Kontrollera att sökvägen är korrekt
import './service.css';

const Service = ({ language }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('visible');
      } else {
        sectionRef.current.classList.remove('visible');
      }
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const titleText = language === 'sv' ? 'Teknologier och ramverk jag använder' : 'Technologies and Frameworks I Use';

  return (
    <section className="service-section">
      {/* Flytta upp "Teknologier och ramverk" överst */}
      <div id="frontendandbackend" ref={sectionRef} className="frameworks-section">
        <h2>{titleText}</h2>
        <div className="icon-container">
          {[
            { src: '/css.svg', alt: 'CSS', label: language === 'sv' ? 'css' : 'CSS' },
            { src: '/express.svg', alt: 'Express', label: language === 'sv' ? 'express' : 'Express' },
            { src: '/git.svg', alt: 'Git', label: language === 'sv' ? 'git' : 'Git' },
            { src: '/html.svg', alt: 'HTML', label: language === 'sv' ? 'html' : 'HTML' },
            { src: '/javascript.svg', alt: 'JavaScript', label: language === 'sv' ? 'javascript' : 'JavaScript' },
            { src: '/mongodb.svg', alt: 'MongoDB', label: language === 'sv' ? 'mongo db' : 'MongoDB' },
            { src: '/nodejs.svg', alt: 'Node.js', label: language === 'sv' ? 'nodejs' : 'Node.js' },
            { src: '/react_icon.svg', alt: 'React', label: language === 'sv' ? 'react' : 'React' },
            { src: '/tailwind-css.svg', alt: 'Tailwind CSS', label: language === 'sv' ? 'tailwind css' : 'Tailwind CSS' },
            { src: '/typescript.svg', alt: 'TypeScript', label: language === 'sv' ? 'typescript' : 'TypeScript' }
          ].map((tech, index) => (
            <div className="icon" key={index}>
              <img src={tech.src} alt={tech.alt} />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resten av sektionen nedanför "Teknologier och ramverk" */}
      <div className="service-container">
        <div className="image-column">
          <Lottie animationData={DiscountData} loop={true} id="animated-image" />
        </div>
        <div className="text-column">
          <h2 className="special-title">{language === 'sv' ? 'Erbjudande' : ' Offer'}</h2>
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

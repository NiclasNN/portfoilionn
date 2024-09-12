import React, { useEffect, useRef } from 'react';
import './About.css';

const About = ({ language }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        aboutRef.current.classList.add('visible');
      } else {
        aboutRef.current.classList.remove('visible');
      }
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="hej-box"></div>
      {/* Behåll id='about' så att scroll fungerar */}
      <div id="about" className="about-container" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              {language === 'sv' ? 'Om mig' : 'About Me'}
            </h1>
            <p>
              {language === 'sv'
                ? `Hej, jag heter Niclas Norman. Jag är en analytisk person som gillar att lösa problem och tänka igenom olika situationer. Jag är bra på att bryta ner komplexa problem i mindre delar, vilket ofta gör att jag kan hitta effektiva lösningar. Jag uppskattar att arbeta i en lugn och samarbetande miljö och ser fram emot att ta mig an nya projekt.`
                : `Hi, I'm Niclas Norman. I'm an analytical person who enjoys solving problems and carefully considering different situations. I'm skilled at breaking down complex problems into smaller parts, which often helps me find effective solutions. I appreciate working in a calm, collaborative environment and look forward to tackling new projects.`}
            </p>
          </div>
          {/* GIF-kolumn */}
          <div className="about-image-container">
            <img className="about-image" src="/me-animate-unscreen.gif" alt="Niclas Norman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

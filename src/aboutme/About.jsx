import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Callback-funktion som körs när elementets synlighet förändras
    const callback = (entries) => {
      const [entry] = entries; // Vi tar första elementet från entries-arrayen
      if (entry.isIntersecting) {
        aboutRef.current.classList.add('visible');
        console.log('Element is visible'); // Debug: elementet är synligt
      } else {
        aboutRef.current.classList.remove('visible');
        console.log('Element is not visible'); // Debug: elementet är inte synligt
      }
    };

    // Skapa en observer som anropar callback när elementets synlighet förändras
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    // Observera det refererade elementet
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Städa upp och sluta observera när komponenten unmountas
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about-container" ref={aboutRef}>
      <p>
        Hej, jag heter Niclas Norman. Jag är en lugn och analytisk person som gillar att lösa problem och analysera olika situationer. Med min tålmodighet och förmåga att se förbi det uppenbara, hittar jag ofta effektiva lösningar på utmaningar. Jag trivs i harmoniska arbetsmiljöer och arbetar för att skapa ett gott samarbete. Jag ser fram emot att ta mig an nya utmaningar och projekt.
      </p>
      <img src="/aboutimage.png" alt="About" className="about-image" />
    </div>
  );
};

export default About;

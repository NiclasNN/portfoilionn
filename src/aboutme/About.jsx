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
    <div id="about" className="about-container" ref={aboutRef}>
      <p>
        {language === 'sv'
          ? 'Hej, jag heter Niclas Norman. Jag är en lugn och analytisk person som gillar att lösa problem och analysera olika situationer. Med min tålmodighet och förmåga att se förbi det uppenbara, hittar jag ofta effektiva lösningar på utmaningar. Jag trivs i harmoniska arbetsmiljöer och arbetar för att skapa ett gott samarbete. Jag ser fram emot att ta mig an nya utmaningar och projekt.'
          : 'Hi, my name is Niclas Norman. I am a calm and analytical person who enjoys solving problems and analyzing various situations. With my patience and ability to look beyond the obvious, I often find effective solutions to challenges. I thrive in harmonious work environments and work to create good collaboration. I look forward to taking on new challenges and projects.'
        }
      </p>
      <img src="/aboutimage.png" alt="About" className="about-image" />
    </div>
  );
};

export default About;

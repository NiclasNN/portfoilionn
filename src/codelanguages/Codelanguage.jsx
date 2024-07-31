import React, { useEffect, useRef } from 'react';
import './codelanguage.css';

function Codelanguage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Callback-funktion som körs när elementets synlighet förändras
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('visible');
        console.log('Element is visible'); // Debug: elementet är synligt
      } else {
        sectionRef.current.classList.remove('visible');
        console.log('Element is not visible'); // Debug: elementet är inte synligt
      }
    };

    // Skapa en observer som anropar callback när elementets synlighet förändras
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    // Observera det refererade elementet
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Städa upp och sluta observera när komponenten unmountas
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='frontendandbackend' ref={sectionRef}>
      <h2>Teknologier och ramverk jag använder</h2>
      <div className='icon-container'>
        {[
          { src: '/css.svg', alt: 'CSS', label: 'css' },
          { src: '/express.svg', alt: 'Express', label: 'express' },
          { src: '/git.svg', alt: 'Git', label: 'git' },
          { src: '/html.svg', alt: 'HTML', label: 'html' },
          { src: '/javascript.svg', alt: 'JavaScript', label: 'javascript' },
          { src: '/mongodb.svg', alt: 'MongoDB', label: 'mongo db' },
          { src: '/nodejs.svg', alt: 'Node.js', label: 'nodejs' },
          { src: '/react_icon.svg', alt: 'React', label: 'react' },
          { src: '/tailwind-css.svg', alt: 'Tailwind CSS', label: 'tailwind css' },
          { src: '/typescript.svg', alt: 'TypeScript', label: 'typescript' }
        ].map((tech, index) => (
          <div className='icon' key={index}>
            <img src={tech.src} alt={tech.alt} />
            <p>{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Codelanguage;

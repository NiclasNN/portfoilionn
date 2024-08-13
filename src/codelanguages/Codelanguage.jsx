import React, { useEffect, useRef } from 'react';
import './codelanguage.css';

function Codelanguage({ language }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('visible');
        console.log('Element is visible');
      } else {
        sectionRef.current.classList.remove('visible');
        console.log('Element is not visible');
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
    <div className='frontendandbackend' ref={sectionRef}>
      <h2>{titleText}</h2>
      <div className='icon-container'>
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

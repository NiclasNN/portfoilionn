import React from 'react';
import './codelanguage.css';
function Codelanguage() {
  return (
    <div className='frontendandbackend'>
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

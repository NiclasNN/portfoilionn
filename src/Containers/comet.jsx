import React, { useEffect } from 'react';
import './comet.css';

const Comet = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    const interval = setInterval(createParticle, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Comet;

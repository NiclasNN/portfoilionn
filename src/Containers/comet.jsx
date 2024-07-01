import React, { useEffect } from 'react';
import './comet.css';

const Comet = () => {
  useEffect(() => {
    const createComet = () => {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.top = `${Math.random() * 100}vh`;
      comet.style.left = `-${Math.random() * 20 + 10}vw`; // Startar utanför skärmen
      comet.style.animationDuration = `${Math.random() * 2 + 3}s`;

      document.querySelector('.comet-container').appendChild(comet);

      setTimeout(() => {
        comet.remove();
      }, 5000); // Remove comet after 5 seconds
    };

    const interval = setInterval(createComet, 500); // Create a comet every 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  return <div className="comet-container"></div>;
};

export default Comet;

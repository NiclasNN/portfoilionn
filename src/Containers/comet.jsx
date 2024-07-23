import React, { useEffect } from 'react';
import './comet.css';

const Comet = () => {
  useEffect(() => {
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => {
      const size = Math.random() * 60 + 20; // Justera storleken på kuberna
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 20 + 10; // Justera hastigheten
      const delay = Math.random() * 10;
      const rotate = Math.random() * 360;

      cube.style.width = `${size}px`;
      cube.style.height = `${size}px`;
      cube.style.left = `${left}%`;
      cube.style.top = `${top}%`;
      cube.style.animationDuration = `${duration}s`;
      cube.style.animationDelay = `${delay}s`;
      cube.style.transform = `rotate(${rotate}deg)`;
      cube.style.backgroundColor = `rgba(0, 0, 255, ${Math.random() * 0.5 + 0.3})`; // Justera färgintensiteten
    });
  }, []);

  return (
    <div className="comet-container">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="cube"></div>
      ))}
    </div>
  );
};

export default Comet;

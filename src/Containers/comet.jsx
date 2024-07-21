import React, { useEffect } from 'react';
import './comet.css';

const Comet = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.width = `${Math.random() * 50 + 50}px`;
      bubble.style.height = bubble.style.width;

      document.querySelector('.comet-container').appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 30000); // Bubblan försvinner efter 30 sekunder
    };

    for (let i = 0; i < 10; i++) { // Fewer bubbles
      createBubble();
    }

    const interval = setInterval(createBubble, 5000); // Create a new bubble every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return <div className="comet-container"></div>;
};

export default Comet;

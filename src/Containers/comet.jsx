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

      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 20000); // Bubblan försvinner efter 20 sekunder
    };

    for (let i = 0; i < 20; i++) {
      createBubble();
    }

    const interval = setInterval(createBubble, 4000); // Skapa en ny bubbla var 4:e sekund

    return () => clearInterval(interval);
  }, []);

  return null; // Komponent returnerar ingenting, eftersom bubblorna läggs till direkt i DOM:en
};

export default Comet;

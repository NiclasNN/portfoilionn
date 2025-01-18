import React from 'react';
import './recommendation.css';

const Recommendation = () => {
  return (
    <section className="recommendation-section">
      <h2 className="recommendation-heading">Vad andra säger om mig</h2>
      <div className="recommendation-container">
        <blockquote className="recommendation-text">
          "Niclas är en mycket kompetent student inom webbutveckling och visar alltid stor noggrannhet i sitt arbete. 
          Han är en pålitlig och skicklig tillgång i vilket team som helst."
        </blockquote>
        <div className="recommendation-author">
          <img 
            src="/path-to-image/marcus.jpg" 
            alt="Marcus Pousette" 
            className="author-image" 
          />
          <div className="author-details">
            <p className="author-name">Marcus Pousette</p>
            <p className="author-title">Head of Techover Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;

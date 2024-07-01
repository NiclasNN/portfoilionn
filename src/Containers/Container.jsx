import React from 'react';
import './container.css';
import Comet from './comet';

const Container = ({ children }) => {
  return (
    <div className="container">
        <Comet />
      <div id ="box">
    
      <img src="/jag.png" alt="Bild på mig" className="my-image" />
      {children}
      </div>
    </div>
  );
};

export default Container;

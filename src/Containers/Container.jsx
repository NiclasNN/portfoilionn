import React from 'react';
import './container.css';
import Comet from './comet';

const Container = ({ children }) => {
  return (
    <div className="container">
        <Comet />
      <div id = "boxen">
      
      <img src="/jag.png" alt="Bild på mig" className="my-image" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam nihil illo omnis est sit, consequatur soluta, accusamus sunt enim repellendus id beatae voluptatem explicabo totam pariatur quod! Vel, veniam.</p>
      {children}
      </div>
      </div>
  );
};

export default Container;

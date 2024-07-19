import React from 'react';
import './container.css';
import Comet from './comet';
import About from '../aboutme/About';
import Projects from '../myprojects/Projects';
import Codelanguage from '../codelanguages/Codelanguage'; 

const Container = ({ children }) => {
  return (
    <div className="container">
      <Comet />
      <div className="boxes">
        <div id="boxen2"> 
          <h2>Niclas Norman</h2>
          <h1>Frontend developer</h1>
        </div>
        <div id="boxen">
          <img src="/jag.png" alt="Bild på mig" className="my-image" />
          {children}
          
        </div>
        
      </div>
      <About />
      <Codelanguage /> 
      <Projects/>
    </div>
  );
};

export default Container;

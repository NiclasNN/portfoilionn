import React from 'react';
import './container.css';
import About from '../aboutme/About';
import Projects from '../myprojects/Projects';
import Codelanguage from '../codelanguages/Codelanguage';

const Container = ({ children }) => {
  return (
    <div className="container">
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
      <Projects />
      <div id="contactme">
      <a href="mailto:niclasnorman1@hotmail.se"> <h3>kontakta mig</h3></a>
      </div>
    </div>
  );
};

export default Container;

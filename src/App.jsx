import React, { useState } from 'react';
import Navbar from './Navbars/navbar';
import Container from './Containers/Container';// Import the SocialIcons component
import './App.css';

function App() {
  const [language, setLanguage] = useState('sv'); // Standard language is Swedish

  return (
    <div className="App">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Navbar language={language} setLanguage={setLanguage} />
      <Container language={language} />
     
    </div>
  );
}

export default App;

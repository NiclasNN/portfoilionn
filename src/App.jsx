// App.jsx
import React from 'react';
import Navbar from './Navbars/navbar';
import Container from './Containers/Container';
import './App.css';
import About from './aboutme/About';


function App() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          
          {/* Annat innehåll kan läggas till här */}
        </Container>
      </div>
    );
  }
  
  export default App;
import React from 'react';
import Navbar from './Navbars/navbar';
import Container from './Containers/Container';
import './App.css';

function App() {
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
            <Navbar />
            <Container>
                <div className="context">
                    
                </div>
                {/* Annat innehåll kan läggas till här */}
            </Container>
        </div>
    );
}

export default App;

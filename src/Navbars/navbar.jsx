import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#home">My Portfolio</a>
                </div>
                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#Me">Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

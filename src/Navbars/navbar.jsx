import React, { useEffect } from 'react';
import './navbar.css';

function Navbar() {
    useEffect(() => {
        const handleScroll = (event) => {
            const href = event.target.getAttribute('href');
            
            if (!href) return;

            if (href.startsWith('mailto:')) {
                // Allow the mailto link to function as intended
                return;
            }

            if (href === '#home') {
                event.preventDefault();
                const targetSection = document.querySelector('.boxes');
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.replace('#', '');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const links = document.querySelectorAll('.navbar-links a');
        links.forEach(link => {
            link.addEventListener('click', handleScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleScroll);
            });
        };
    }, []);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#home">Niclas Norman</a>
                </div>
                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#about">Me</a>
                    <a href="#projects">Projects</a>
                    <a href="mailto:niclasnorman1@hotmail.se">Contact</a>
                    <a href={`/CV.pdf`} download>CV</a>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar({ language, setLanguage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            const href = event.target.getAttribute('href');
            if (!href) return;

            if (href.startsWith('mailto:')) return;

            if (href === '#home') {
                event.preventDefault();
                const targetSection = document.querySelector('.boxes');
                if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
            } else if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.replace('#', '');
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const links = document.querySelectorAll('.navbar-links a');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => links.forEach(link => link.removeEventListener('click', handleScroll));
    }, []);

    // Funktion för att byta språk
    const toggleLanguage = () => {
        const newLanguage = language === 'sv' ? 'en' : 'sv';
        setLanguage(newLanguage);
    };

    // Text baserad på det valda språket
    const text = {
        home: language === 'sv' ? 'Hem' : 'Home',
        about: language === 'sv' ? 'Om mig' : 'About',
        projects: language === 'sv' ? 'Projekt' : 'Projects',
        contact: language === 'sv' ? 'Kontakt' : 'Contact',
        downloadCv: language === 'sv' ? 'CV' : 'Resume',
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#home">Niclas Norman</a>
                </div>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#home">{text.home}</a>
                    <a href="#about">{text.about}</a>
                    <a href="#projects">{text.projects}</a>
                    <a href="mailto:niclasnorman1@hotmail.se">{text.contact}</a>
                    <a href={`/CV.pdf`} download>{text.downloadCv}</a>

                    {/* Flagga för språkbyte */}
                    <img
                        src={language === 'sv' ? '/english.svg' : '/swedish.svg'}
                        alt={language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
                        className="navbar-flag"
                        onClick={toggleLanguage}
                    />
                </div>
                <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

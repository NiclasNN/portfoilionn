import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar({ language, setLanguage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            const href = event.target.getAttribute('href');
            if (!href) return;

            if (href.startsWith('mailto:') || href.endsWith('.pdf')) return;

            event.preventDefault(); // Hindrar webbläsaren från att följa länken för vanliga länkar

            let targetSection = null;
    if (href === '#home') {
            targetSection = document.querySelector('.container');
        } else if (href === '#about') {
            targetSection = document.querySelector('.hej-box');
        } else if (href === '#niclasnorman') {
            targetSection = document.querySelector('.container'); // Korrekt selektor för #niclasnorman
        } else if (href === '#projects') {
            targetSection = document.getElementById('projects');
        } else if (href.startsWith('#')) {
            const targetId = href.replace('#', '');
            targetSection = document.getElementById(targetId);
        }

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Stänger menyn efter klick på en länk
            setMenuOpen(false);
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
        about: language === 'sv' ? ' Om mig' : 'About',
        projects: language === 'sv' ? 'Projekt' : 'Projects',
        contact: language === 'sv' ? 'Kontakt' : 'Contact',
        downloadCv: language === 'sv' ? 'CV' : 'Resume',
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#niclasnorman">Niclas Norman</a>
                </div>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#home">{text.home}</a>
                    <a href="#services">Service</a>
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

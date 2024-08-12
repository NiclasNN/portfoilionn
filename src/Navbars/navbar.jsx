import React, { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('sv'); // 'sv' för svenska, 'en' för engelska

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

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'sv' ? 'en' : 'sv');
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#home">Niclas Norman</a>
                </div>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#about">Me</a>
                    <a href="#projects">Projects</a>
                    <a href="mailto:niclasnorman1@hotmail.se">Contact</a>
                    <a href={`/CV.pdf`} download>CV</a>

                    {/* Flag for language toggle */}
                    <img
                        src={language === 'sv' ? 'english.svg' : 'swedish.svg'}
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

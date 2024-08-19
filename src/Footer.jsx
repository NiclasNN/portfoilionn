import React from 'react';
import './footer.css';

function Footer({ language }) {
    // Text baserad på det valda språket
    const text = {
        developerName: language === 'sv' ? 'Niclas Norman' : 'Niclas Norman',
        description: language === 'sv' 
            ? 'Webbutvecklare med erfarenhet inom både front-end och back-end. Starka färdigheter inom design och kodning för att hantera olika projekt och utmaningar.'
            : 'Web developer with experience in both front-end and back-end. Strong skills in design and coding to handle various projects and challenges.',
        navigate: language === 'sv' ? 'Navigera' : 'Navigate',
        home: language === 'sv' ? 'Hem' : 'Home',
        about: language === 'sv' ? 'Om Mig' : 'About Me',
        projects: language === 'sv' ? 'Projekt' : 'Projects',
        cv: language === 'sv' ? 'CV' : 'Resume',
        contact: language === 'sv' ? 'Kontakta' : 'Contact',
        city: language === 'sv' ? 'Täby, Stockholm' : 'Täby, Stockholm',
        copyright: language === 'sv' ? '© 2024 - Niclas Norman' : '© 2024 - Niclas Norman'
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>{text.developerName}</h3>
                    <p>{text.description}</p>
                </div>
                <div className="footer-section">
                    <h3>{text.navigate}</h3>
                    <ul>
                        <li><a href="#home">{text.home}</a></li>
                        <li><a href="#about">{text.about}</a></li>
                        <li><a href="#projects">{text.projects}</a></li>
                        <li><a href={`/CV.pdf`} download>{text.cv}</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>{text.contact}</h3>
                    <p>niclasnorman1@hotmail.se</p>
                    <p>+46 70 7752120</p>
                    <p>{text.city}</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{text.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;

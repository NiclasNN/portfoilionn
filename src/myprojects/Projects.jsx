import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [flipped, setFlipped] = useState(Array(4).fill(false));
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        projectRef.current.classList.add('visible');
      } else {
        projectRef.current.classList.remove('visible');
      }
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  const handleFlip = (index) => {
    setFlipped((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Spotify-klon",
      description: "Jag skapade en Spotify klon med fokus på att erbjuda en användarvänlig upplevelse både för mobile enheter och desktop. Genom att använda React och Material UI integrerade jag Spotify API för att låta användarna skapa och dela sina personliga spellistor direkt från webbklienten. Resultatet är en smidig och responsiv plattform för musikentusiaster att njuta av sina favoriter var de än är.",
      tech: "Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK",
      image: "/spotify-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Flaggapp",
      description: "Jag utvecklade en flaggapp som använder en REST Countries API och implementerade den med React, Material UI och CSS. Användare kan bläddra bland flaggor från hela världen och få detaljerad information om olika länders valuta, nationalrätt och huvudspråk. Genom att kombinera React med API:et kunde jag skapa en snabb och interaktiv app, som erbjuder en engagerande och lärorik upplevelse för användare som utforskar världens länder.",
      tech: "Html | React | CSS | Material UI | Rest countries API",
      image: "/flaggapp-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Klarna checkout",
      description: "Jag skapade ett backend projekt med en enkel butik som använder Fake Store API. Genom att integrera Klarnas checkout kunde jag erbjuda en smidig betalningslösning för kunderna. Genom att använda Node.js och Express kunde jag hantera genomförda betalningar och säker lagring av data. Mitt fokus låg på säkerhet och att erbjuda en intuitiv och användarvänlig upplevelse för slutanvändaren.",
      tech: "Node.js | Express | Klarna API | Fake Store API",
      image: "/klarna-checkout-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Lösenordsgenerator",
      description: "Jag utvecklade en lösenordsgenerator som ger användarna möjlighet att skapa anpassade lösenord enligt deras preferenser. Användare kan välja att inkludera nummer, stora bokstäver, små bokstäver, och specialtecken, vilket ger en flexibel lösning för att skapa starka lösenord. Jag använde HTML, CSS och JavaScript för att bygga applikationen och lade särskild vikt vid användarvänlig design och funktionalitet. Det är ett enkelt men kraftfullt verktyg för att säkerställa hög nivå av säkerhet för deras konton och data.",
      tech: "Html | CSS | Javascript",
      image: "/lösenordsgenerator-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    }
  ];

  return (
    <div id="projects" className="projects" ref={projectRef}>
      <h2>Projekt</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className={`project-box ${flipped[index] ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleProjectClick(index)}
          >
            <div className="project-box-inner">
              <div className="project-box-front">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="project-box-back">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="tech-stack">{project.tech}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-detail">
          <button className="back-button" onClick={handleBackClick}>Tillbaka</button>
          <div className="project-detail-content">
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <p className="tech-stack">{selectedProject.tech}</p>
            <div className="buttons">
              <a href={selectedProject.github} className="button">Github</a>
              <a href={selectedProject.demo} className="button">Demo</a>
              <a href={selectedProject.download} className="button">Ladda ner</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

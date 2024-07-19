import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Spotify-klon",
      description: "Jag skapade en Spotify klon med fokus på att erbjuda en användarvänlig upplevelse både för mobile enheter och desktop. Genom att använda React och Material UI integrerade jag Spotify API för att låta användarna skapa och dela sina personliga spellistor direkt från webbklienten. Resultatet är en smidig och responsiv plattform för musikentusiaster att njuta av sina favoriter var de än är.",
      tech: "Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK",
      image: "/path/to/spotify-klon.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Flaggapp",
      description: "Jag utvecklade en flaggapp som använder en REST Countries API och implementerade den med React, Material UI och CSS. Användare kan bläddra bland flaggor från hela världen och få detaljerad information om olika länders valuta, nationalrätt och huvudspråk. Genom att kombinera React med API:et kunde jag skapa en snabb och interaktiv app, som erbjuder en engagerande och lärorik upplevelse för användare som utforskar världens länder.",
      tech: "Html | React | CSS | Material UI | Rest countries API",
      image: "/path/to/flaggapp.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Klarna checkout",
      description: "Jag skapade ett backend projekt med en enkel butik som använder Fake Store API. Genom att integrera Klarnas checkout kunde jag erbjuda en smidig betalningslösning för kunderna. Genom att använda Node.js och Express kunde jag hantera genomförda betalningar och säker lagring av data. Mitt fokus låg på säkerhet och att erbjuda en intuitiv och användarvänlig upplevelse för slutanvändaren.",
      tech: "Node.js | Express | Klarna API | Fake Store API",
      image: "/path/to/klarna-checkout.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Lösenordsgenerator",
      description: "Jag utvecklade en lösenordsgenerator som ger användarna möjlighet att skapa anpassade lösenord enligt deras preferenser. Användare kan välja att inkludera nummer, stora bokstäver, små bokstäver, och specialtecken, vilket ger en flexibel lösning för att skapa starka lösenord. Jag använde HTML, CSS och JavaScript för att bygga applikationen och lade särskild vikt vid användarvänlig design och funktionalitet. Det är ett enkelt men kraftfullt verktyg för att säkerställa hög nivå av säkerhet för deras konton och data.",
      tech: "Html | CSS | Javascript",
      image: "/path/to/losenordsgenerator.png",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="projects">
      <h2>Projekt</h2>
      {projects.map((project, index) => (
        <div className="project-box" key={index}>
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">{project.tech}</p>
            <div className="buttons">
              <a href={project.github} className="button">Github</a>
              <a href={project.demo} className="button">Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = {
  sv: [
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
      description: "Jag utvecklade en lösenordsgenerator som använder en kombination av React och TypeScript för att skapa ett enkelt och säkert verktyg för att generera starka lösenord. Användare kan anpassa lösenordets längd och komplexitet för att passa deras specifika behov och säkerhetskrav. Projektet inkluderade även användarvänliga funktioner som visuell feedback och kopieringsalternativ.",
      tech: "Html | React | TypeScript | CSS",
      image: "/lösenordsgenerator-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    }
  ],
  en: [
    {
      title: "Spotify Clone",
      description: "I created a Spotify clone focusing on providing a user-friendly experience for both mobile devices and desktop. By using React and Material UI, I integrated Spotify API to allow users to create and share their personal playlists directly from the web client. The result is a smooth and responsive platform for music enthusiasts to enjoy their favorites wherever they are.",
      tech: "Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK",
      image: "/spotify-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Flag App",
      description: "I developed a flag app using the REST Countries API and implemented it with React, Material UI, and CSS. Users can browse flags from around the world and get detailed information about different countries' currency, national dish, and main language. By combining React with the API, I was able to create a fast and interactive app, offering an engaging and educational experience for users exploring the countries of the world.",
      tech: "Html | React | CSS | Material UI | Rest countries API",
      image: "/flaggapp-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Klarna Checkout",
      description: "I created a backend project with a simple store that uses the Fake Store API. By integrating Klarna's checkout, I was able to offer a smooth payment solution for customers. Using Node.js and Express, I handled completed payments and secure data storage. My focus was on security and offering an intuitive and user-friendly experience for the end user.",
      tech: "Node.js | Express | Klarna API | Fake Store API",
      image: "/klarna-checkout-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    },
    {
      title: "Password Generator",
      description: "I developed a password generator using a combination of React and TypeScript to create a simple and secure tool for generating strong passwords. Users can customize the password length and complexity to suit their specific needs and security requirements. The project also included user-friendly features such as visual feedback and copy options.",
      tech: "Html | React | TypeScript | CSS",
      image: "/lösenordsgenerator-preveiw.png",
      github: "#",
      demo: "#",
      download: "#"
    }
  ]
};

function Projects({ language }) {
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

  const projects = projectsData[language] || projectsData.sv;

  const buttonText = {
    github: language === 'sv' ? 'GitHub' : 'GitHub',
    demo: language === 'sv' ? 'Demo' : 'Demo',
    download: language === 'sv' ? 'Ladda ner' : 'Download'
  };

  return (
    <section id="projects" ref={projectRef}>
      <h2>{language === 'sv' ? 'Projekt' : 'Projects'}</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">Tekniker: {project.tech}</p>
              <div className="buttons">
                <a href={project.github} className="button">{buttonText.github}</a>
                <a href={project.demo} className="button">{buttonText.demo}</a>
                <a href={project.download} className="button">{buttonText.download}</a>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

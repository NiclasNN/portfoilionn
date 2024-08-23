import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = {
  sv: [
    {
      title: "Spotify-klon",
      description: "Jag utvecklade en Spotify-klon med fokus på att skapa en användarvänlig upplevelse både för mobil och desktop. Genom att använda React och Material UI integrerade jag Spotify API för att möjliggöra för användarna att skapa och dela sina egna spellistor direkt från webbklienten. Slutresultatet är en smidig och responsiv plattform som gör det enkelt för musikälskare att njuta av sina favoritlåtar oavsett var de befinner sig.",
      tech: "Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK",
      image: "/spotify-preveiw.png",
      demo: "#",
    },
    {
      title: "Flaggapp",
      description: "Jag skapade en flaggapp som använder REST Countries API och byggde den med hjälp av React, Material UI och CSS. Användarna kan bläddra bland flaggor från olika länder och få detaljerad information om valutor, nationalrätter och huvudspråk. Genom att kombinera React med API:et lyckades jag skapa en snabb och interaktiv applikation som erbjuder en engagerande och informativ upplevelse för användare som utforskar världens länder.",
      tech: "Html | React | CSS | Material UI | Rest countries API",
      image: "/flaggapp-preveiw.png",
      demo: "https://countriesoftheworld-nn.netlify.app/",
    },
    {
      title: "Klarna checkout",
      description: "Jag utvecklade ett backend-projekt med en enkel butik som använder Fake Store API. Genom att integrera Klarnas checkout-lösning kunde jag erbjuda en smidig betalningsupplevelse för kunderna. Med hjälp av Node.js och Express hanterade jag betalningar och säker lagring av data. Mitt fokus låg på att skapa en säker och intuitiv upplevelse för slutanvändaren.",
      tech: "Node.js | Express | Klarna API | Fake Store API",
      image: "/klarna-checkout-preveiw.png",
      demo: "#",
    },
    {
      title: "Lösenordsgenerator",
      description: "Jag skapade en lösenordsgenerator med hjälp av React och TypeScript för att tillhandahålla ett enkelt och säkert verktyg för att generera starka lösenord. Användarna kan anpassa lösenordets längd och komplexitet för att möta deras specifika behov och säkerhetskrav. Projektet inkluderade även användarvänliga funktioner som visuell feedback och möjligheten att kopiera lösenord.",
      tech: "Html | React | TypeScript | CSS",
      image: "/lösenordsgenerator-preveiw.png",
      demo: "https://losenordsgenerator.netlify.app/",
    }
  ],
  en: [
    {
      title: "Spotify Clone",
      description: "I developed a Spotify clone focusing on creating a user-friendly experience for both mobile and desktop. Utilizing React and Material UI, I integrated the Spotify API to allow users to create and share their personal playlists directly from the web client. The end result is a smooth and responsive platform, enabling music lovers to enjoy their favorite tunes no matter where they are.",
      tech: "Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK",
      image: "/spotify-preveiw.png",
      demo: "#",
    },
    {
      title: "Flag App",
      description: "I built a flag app utilizing the REST Countries API and implemented it with React, Material UI, and CSS. Users can browse through flags from different countries and get detailed information about currencies, national dishes, and main languages. By combining React with the API, I created a fast and interactive application that offers an engaging and educational experience for users exploring the world's countries.",
      tech: "Html | React | CSS | Material UI | Rest countries API",
      image: "/flaggapp-preveiw.png",
      demo: "https://countriesoftheworld-nn.netlify.app/",
    },
    {
      title: "Klarna Checkout",
      description: "I developed a backend project with a simple store using the Fake Store API. By integrating Klarna's checkout solution, I was able to offer a seamless payment experience for customers. Using Node.js and Express, I managed payments and secure data storage. My focus was on creating a secure and intuitive experience for the end-user.",
      tech: "Node.js | Express | Klarna API | Fake Store API",
      image: "/klarna-checkout-preveiw.png",
      demo: "#",
    },
    {
      title: "Password Generator",
      description: "I created a password generator using React and TypeScript to provide a simple and secure tool for generating strong passwords. Users can customize the length and complexity of the passwords to meet their specific needs and security requirements. The project also included user-friendly features such as visual feedback and copy options.",
      tech: "Html | React | TypeScript | CSS",
      image: "/lösenordsgenerator-preveiw.png",
      demo: "https://losenordsgenerator.netlify.app/",
    }
  ]
};

function Projects({ language }) {
  const projectRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        projectRef.current.classList.add('visible');
      } else {
        projectRef.current.classList.remove('visible');
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

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
    demo: language === 'sv' ? 'Demo' : 'Demo',
  };

  return (
    <section id="projects" ref={projectRef}>
      <div className="above-h2">
        {/* Add any content or styling needed here */}
      </div>
      <h2>{language === 'sv' ? 'Projekt' : 'Projects'}</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">Technologies: {project.tech}</p>
              <div className="buttons">
                <a 
                  href={project.demo} 
                  className="button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {buttonText.demo}
                </a>
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

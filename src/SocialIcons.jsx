import './SocialIcons.css';
const SocialIcons = () => {
  return (
    <div className="social-icons" >
      <a href="https://www.linkedin.com/in/niclas-norman-811a9622a/" target="_blank" rel="noopener noreferrer">
        <img src="./linkedin_icon.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/NiclasNN" target="_blank" rel="noopener noreferrer">
        <img src="./github_icon.svg" alt="GitHub" />
      </a>
      <a href="mailto:niclasnorman1@hotmail.se">
        <img src="./email_icon.svg" alt="Email" />
      </a>
      <p>Social Icons should be visible here.</p> {/* Lägg till text för att se om den syns */}
    </div>
  );
};

export default SocialIcons;

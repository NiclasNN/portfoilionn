import React from 'react';
import './App.css'; // Se till att rätt CSS-fil är inkluderad

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="./linkedin_icon.svg" alt="LinkedIn" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <img src="./github_icon.svg" alt="GitHub" />
      </a>
      <a href="mailto:someone@example.com">
        <img src="./email_icon.svg" alt="Email" />
      </a>
    </div>
  );
};

export default SocialIcons;

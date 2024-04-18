// Desc: Hero component
// Usage: Used across various pages to display a hero section

import React from "react";

const Hero = ({title, description, buttonText, imgURL}) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content-left">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description} </p>
          <a href="#urlShortener" className="hero-button">{buttonText}</a>
        </div>
        <div className="hero-content-right">
          <img
            src={imgURL}
            alt="hero"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

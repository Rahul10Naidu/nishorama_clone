import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section ">
      <div className="media">
        <video muted loop autoPlay>
          <source src="https://cdn.shopify.com/videos/c/o/v/9b1916f1f4fb424d8d29afa900a2cf3e.mp4" />
        </video>
      </div>
      <div className="hero-text">
        <h1 className="en-text">NISHORAMA</h1>
        <p className="hd-text">|| नज़र न लगे ||</p>
      </div>
    </div>
  );
};

export default HeroSection;

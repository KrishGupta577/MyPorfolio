import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Krishna Gupta</span>
        </h1>
        <p className="hero-subtitle">
          Full-Stack Developer | MERN Specialist | Problem Solver
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">Get in Touch</a>
          <a href="#projects" className="btn secondary-btn">View Projects</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
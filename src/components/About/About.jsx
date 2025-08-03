import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src='/Profile_photo.png' className="image-placeholder"></img>
          </div>
        </div>
        <div className="about-text">
          <p>
            As a Computer Science student at Sri Aurobindo Institute of Technology,
            I combine academic excellence with practical development experience.
          </p>
          <p>
            My focus on MERN stack development has equipped me with the skills to build
            scalable, user-centric applications that solve real-world problems.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Coding</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
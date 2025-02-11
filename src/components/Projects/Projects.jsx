import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Food Del – Food Ordering Website',
      description: 'A comprehensive food ordering platform featuring an admin panel, order management system, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/KrishGupta577/Food-Del',
      live: '#',
      image: 'food-del.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and custom animations, featuring smooth interactions and dynamic content.',
      technologies: ['React', 'CSS Animations', 'Responsive Design'],
      github: '#',
      live: '#',
      image: 'portfolio.jpg'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';
import { projects } from '../../utils/projects';

const Projects = () => {

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
                  {project.live !== null && <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    <span>Live Demo</span>
                  </a>}
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

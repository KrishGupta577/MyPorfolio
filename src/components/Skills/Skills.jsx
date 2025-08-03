import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: '💻' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Node.js', level: 80, icon: '🚀' },
    { name: 'MongoDB', level: 75, icon: '🗄️' },
    { name: 'Express.js', level: 80, icon: '🛠️' },
    { name: 'Git & GitHub', level: 85, icon: '📚' }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}
               style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar-container">
              <div 
                className="skill-bar" 
                style={{ width: `${skill.level}%` }}
                data-level={`${skill.level}%`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
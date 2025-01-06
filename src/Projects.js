import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Analysing Pedestrian Dynamics and Flow Patterns Around Hazratbal Shrine: A Study on Movement and Congregation Behaviour",
    previewImage: 'https://i.imgur.com/VJg8TJE.png',
    documentUrl: 'https://drive.google.com/file/d/1EaPKG90Zdxy-AZ1X84XRARWnitHPMt4u/view',
    description: "This research project aims to analyse and improve pedestrian flow around the Hazratbal Shrine, focusing on patterns, influencing factors, and the impact of external conditions."
  },
  {
    id: 2,
    title: "Urban Development Study: Kashmir Region",
    previewImage: 'https://placehold.co/600x800',
    documentUrl: '#',
    description: "Comprehensive analysis of urban development patterns and challenges in the Kashmir region"
  }
];

const Projects = () => {
    console.log('Projects:', projects);

  return (
    <div className="projects-container">
       <h2 style={{
          fontSize: "2.5rem",
          marginTop: "5rem",
          marginBottom: "1rem",
          color: "#2c3e50"
        }}>Our Projects</h2>
      <div className="projects-grid">
        {projects && projects.map(project => (
          <div key={project.id} className="project-card" 
               onClick={() => window.open(project.documentUrl, '_blank')}>
            <img 
              src={project.previewImage} 
              alt={project.title} 
              className="preview-image"
              style={{
                objectFit: 'cover',
                aspectRatio: '3/4',
                width: '100%',
                height: 'auto'
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

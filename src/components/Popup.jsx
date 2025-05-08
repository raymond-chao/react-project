import React from 'react';

function Popup({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} className="popup-img" />
        <p><b>Tech Used:</b> {project.tech.join(', ')}</p>
        <p><b>Description:</b> {project.description}</p>
        <p><b>What it Does:</b> {project.purpose}</p>
        <p><b>What I Learned:</b> {project.learning}</p>
        <p><b>My Role:</b> {project.role}</p>
        <p><b>Challenges Solved:</b> {project.challenges}</p>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;

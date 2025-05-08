import React, { useState } from 'react';
import ProjectsList from '../components/ProjectList.jsx';
import Popup from '../components/Popup.jsx';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <div className="w-full max-w-4xl space-y-6">
        <ProjectsList onProjectClick={handleProjectClick} />
      </div>

      {selectedProject && (
        <Popup project={selectedProject} onClose={closePopup} />
      )}
    </div>
  );
}

export default Portfolio;

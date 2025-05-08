import React, { useState } from 'react';
import ProjectsList from '../components/ProjectList.jsx';
import Popup from '../components/Popup.jsx';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const toggleProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a project..."
        className="mb-6 px-4 py-2 border border-gray-300 rounded"
      />

      <button
        onClick={toggleProjects}
        className="mb-6 px-4 py-2 bg-black text-white rounded"
      >
        {showProjects ? 'Hide Projects' : 'Show Projects'}
      </button>

      {showProjects && (
        <div className="w-full max-w-4xl space-y-6">
          <ProjectsList
            onProjectClick={handleProjectClick}
            searchTerm={searchTerm}
          />
        </div>
      )}

      {selectedProject && <Popup project={selectedProject} onClose={closePopup} />}
    </div>
  );
}

export default Portfolio;

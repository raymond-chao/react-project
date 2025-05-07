import React, { useState } from 'react';
import Project from '../components/ProjectList.jsx';

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  const handleClick = () => {
    setShowProjects(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <button
        onClick={handleClick}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        {showProjects ? 'Hide Projects' : 'Preview Projects'}
      </button>

      {showProjects && (
        <div className="w-full max-w-4xl space-y-6">
          <Project />
        </div>
      )}
    </div>
  );
}

export default Portfolio;

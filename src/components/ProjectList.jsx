import React from 'react';
import ProjectCard from './ProjectCard';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

function ProjectsList({ onProjectClick, searchTerm }) {
  const projects = [
    {
      name: 'My first webpage',
      image: project1Img,
      repo: 'https://github.com/raymond-chao/Sundsgarden',
      tech: ['HTML', 'CSS'],
      description: 'My cover letter.',
      purpose: 'Displays my experiences.',
      learning: 'My first impression of HTML and CSS.',
      role: 'Solo project',
      challenges: 'Figuring out HTML and CSS.',
    },
    {
      name: 'Genesis Design',
      image: project2Img,
      repo: 'https://github.com/raymond-chao/genesisdesign',
      tech: ['HTML', 'CSS', 'SASS'],
      description: 'Had to copy the Figma file and turn it into HTML, CSS, and SASS..',
      purpose: 'Displays Genesis Design.',
      learning: 'My first impression of SASS.',
      role: 'Solo project',
      challenges: 'Figuring out SASS.',
    },
    {
      name: 'Landing page',
      image: project3Img,
      repo: 'https://github.com/raymond-chao/brat-cafe',
      tech: ['HTML', 'CSS', 'Github'],
      description: 'Landing page.',
      purpose: 'Displays our intergalactic café.',
      learning: 'My first impression of working on a group project.',
      role: 'Landing page on a group projec',
      challenges: 'Figuring out Github.',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 max-w-4xl mx-auto">
      {filteredProjects.map((proj, i) => (
        <div key={i} onClick={() => onProjectClick(proj)}>
          <ProjectCard {...proj} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;

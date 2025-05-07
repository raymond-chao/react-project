function ProjectCard({ name, image, repo, tech, description, purpose, learning, role, challenges }) {
    return (
      <div className="project-card">
        <h2 className="project-text">{name}</h2>
        <img src={image} alt={`${name} screenshot`} className="project-img" />
        <p><b>Tech Used:</b> {tech.join(', ')}</p>
        <p><b>Description:</b> {description}</p>
        <p><b>What it Does:</b> {purpose}</p>
        <p><b>What I Learned:</b> {learning}</p>
        <p><b>My Role:</b> {role}</p>
        <p><b>Challenges Solved:</b> {challenges}</p>
        <a className="github" href={repo} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    );
  }
  
  export default ProjectCard;
  
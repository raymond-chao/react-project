import project3Img from '../assets/project3.png';

function Project3() {
    return (
      <div className="project-card">
        <h2 className="project-text">Landing page</h2>
        <img src={project3Img} alt="Landing page" className="project-img" />
        <p><b>Tech Used:</b> HTML,CSS, Github</p>
        <p><b>Description:</b> Landing page</p>
        <p><b>What it Does:</b> Displays our intergalactic café</p>
        <p><b>What I Learned:</b> My first impression of working on a group project</p>
        <p><b>My Role:</b> Landing page on a group project</p>
        <p><b>Challenges Solved:</b> Figuring out Github</p>
        <a href="https://github.com/raymond-chao/brat-cafe" className="github">
          GitHub Repo
        </a>
      </div>
    );
  }
  
  export default Project3;
  
import project1Img from '../assets/project1.png';

function Project1() {
  return (
    <div className="project-card">
      <h2 className="project-text">My First Webpage</h2>
      <img src={project1Img} alt="My first webpage screenshot" className="project-img" />
      <p><b>Tech Used:</b> HTML, CSS</p>
      <p><b>Description:</b> My cover letter</p>
      <p><b>What it Does:</b> Displays my experiences</p>
      <p><b>What I Learned:</b> My first impression of HTML and CSS</p>
      <p><b>My Role:</b> Solo project</p>
      <p><b>Challenges Solved:</b> Figuring out HTML and CSS</p>
      <a href="https://github.com/raymond-chao/Sundsgarden" className="github">
        GitHub Repo
      </a>
    </div>
  );
}

export default Project1;


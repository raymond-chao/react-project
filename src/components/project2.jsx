import project2Img from '../assets/project2.png';

function Project2() {
  return (
    <div className="project-card">
      <h2 className="project-text">Genesis Design</h2>
      <img src={project2Img} alt="Genesis Design screenshot" className="project-img" />
      <p><b>Tech Used:</b> HTML, CSS, SASS</p>
      <p><b>Description:</b> Had to copy the Figma file and turn it into HTML, CSS, and SASS</p>
      <p><b>What it Does:</b> Displays Genesis Design</p>
      <p><b>What I Learned:</b> My first impression of SASS</p>
      <p><b>My Role:</b> Solo project</p>
      <p><b>Challenges Solved:</b> Figuring out SASS</p>
      <a href="https://github.com/raymond-chao/genesisdesign" className="github">
        GitHub Repo
      </a>
    </div>
  );
}

export default Project2;

import './Projects.css';
import tictactoe from '../assets/images/tictactoe.png';
import pdls from '../assets/images/pdls.png';
import fileshare from '../assets/images/fileshare.png';

function Projects() {
    return (
        <section id="projects" className="main style3">
			<div className="content">
				<header>
					<h2>My Work</h2>
				</header>
				<div className="projects">
					<article className="info">
						<div className="image">
							<img src={tictactoe} alt="Tic Tac Toe" />
						</div>
						<p>Java/Kotlin</p><a href="https://github.com/AlwinGC/TicTacToe" className="link">View Project <i className="fab fa-github-square"></i></a>
						<p>A simple Tic Tac Toe android game.</p>
					</article>				
					<article className="info">
						<div className="image">
							<img src={pdls} alt="Arduino" />
						</div>
						<p>Arduino C++</p><a href="https://github.com/AlwinGC/Password-Door-Lock-System" className="link">View Project <i className="fab fa-github-square"></i></a>
						<p>Password door lock system using Arduino.</p>
					</article>
				</div>
				<div className="projects">
					<article className="info">
						<div className="image">
							<img src={fileshare} alt="React UI" />
						</div>
						<p>React</p><a href="https://github.com/AlwinGC/file-share" className="link">View Project <i className="fab fa-github-square"></i></a>
						<p>A file sharing API where users can upload and share files easily. </p>
					</article>
				</div>
			</div>
		</section>       
    );
  }
  

export default Projects;
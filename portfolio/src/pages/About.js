import './About.css';

function About() {
    return (
		<section id="about" className="main style2">
			<div className="content">
				<header>
					<h2>About Me</h2>
				</header>
				<div className="about-box">
					<div className="one">
						<p>My passion lies in crafting innovative solutions, and this portfolio is a snapshot of my journey, showcasing my commitment to clean code, 
						problem-solving, and continuous learning in the dynamic field of software development.</p>
						<p>When I'm not coding, you can find me enjoying video games like Call of Duty, Valorant and many more. Thanks for stopping by my portfolio!</p>
					</div>
					<div className="two">
						<h1>What I like</h1>
						<ul>
							<li>Java</li>
							<li>React</li>
							<li>Python</li>
							<li>Node.js</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
    );
  }
  

export default About;
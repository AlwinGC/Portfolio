import './Footer.css';

function Footer() {
    return (
      	<footer id="footer">
			<ul className="icons">
				<li><a href="https://www.linkedin.com/in/alwin-christie/" className="icon"><i className="fab fa-linkedin fa-2x"></i><span className="label">LinkedIn</span></a></li>
				<li><a href="https://github.com/AlwinGC" className="icon"><i className="fab fa-github-square fa-2x"></i><span className="label">GitHub</span></a></li>
			</ul>

			<ul className="menu">
				<li>My Portfolio © 2023</li>
			</ul>
		</footer>
    );
  }
  

export default Footer;
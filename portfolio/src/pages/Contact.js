import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="main style4">
			<div className="content">
				<header>
					<h2>Get in Touch  <i className="fab fa-telegram-plane fa-1x"></i></h2>
				</header>
				<div className="box">
					<form method="post" action="#">
						<div className="fields">
							<div className="field half"><input type="text" name="name" placeholder="Name" /></div>
							<div className="field half"><input type="email" name="email" placeholder="Email" /></div>
							<div className="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
						</div>
						<ul className="actions special">
							<li><input type="submit" value="Send Message" /></li>
						</ul>
					</form>
				</div>
			</div>
		</section>
    );
  }
  

export default Contact;
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    return (
        <section id="contact" className="main style4">
			<div className="content">
				<header>
					<h2>Get in Touch  <i className="fab fa-telegram-plane fa-1x"></i></h2>
				</header>
				<div className="box">
					<form method="post" onSubmit={sendEmail}>
						<div className="fields">
							<div className="field half"><input type="text" id="name" name="name" placeholder="Name" /></div>
							<div className="field half"><input type="email" id="email" name="email" placeholder="Email" /></div>
							<div className="field"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
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
  
const sendEmail = (e) => {
	e.preventDefault();
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	if( name.value === "" || email.value === "" || message.value === ""){
		alert("Please fill out the details")
	}
	else {
		emailjs.sendForm('service_zc29huu', 'template_tybkvay', e.target, 'M7Pl_DOotg4peb0nQ')
		.then(
			alert("Email sent successfully")
		);
		name.value = "";
		email.value = "";
		message.value = "";
	}
	
}

export default Contact;
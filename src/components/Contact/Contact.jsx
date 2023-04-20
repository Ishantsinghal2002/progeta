import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<h2>Contact Us</h2>

			<form action="">
				<div className="form__row">
					<div className="form__item">
						<label htmlFor="name">Name</label>
						<input type="text" />
					</div>
					<div className="form__item">
						<label htmlFor="email">Email</label>
						<input type="email" />
					</div>
				</div>

				<div className="form__item">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id=""
						cols="30"
						rows="8"
					></textarea>
				</div>

				<button type="submit" value="Submit">
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default Contact;

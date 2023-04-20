import React from "react";

import "./About.css";

const About = () => {
	return (
		<div className="about" id="about us">
			<div className="aboutLeft">
				<h2>About us</h2>

				<div className="about__cards">
					<div className="about__card">
						<h3>INSIDERS</h3>
						<p>
						Get Real Insights from College Insiders for Informed Decisions on Your Higher Education Journey.
						</p>
					</div>

					<div className="about__card">
						<h3>💡Our Vision</h3>
						<p>
						Revolutionizing the College Decision Making Process by Empowering Students with Authentic and Invaluable Insights.
						</p>
					</div>

					<div className="about__card">
						<h3>🧩Why Us?</h3>
						<p>
						Choose Progeta for Trusted and Authentic Guidance from Real College Insiders to Make Confident Choices for Your Future.
						</p>
					</div>

					<div className="about__card">
						<h3>SEEKERS</h3>
						<p>
						Connect with College Insiders for Expert Guidance and 
						Unfiltered 	Experiences to Make Smarter College Choices.
						</p>
						
					</div>
				</div>
			</div>

			<div className="aboutRight">
				<div id="semicircle"></div>
			</div>
		</div>
	);
};

export default About;

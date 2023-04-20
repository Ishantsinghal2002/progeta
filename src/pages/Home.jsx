import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card/Card";
import Testimonial from "../components/Testimonial/Testimonial";
import DownloadApp from "../components/App/DownloadApp";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

import "./Home.css";

const Home = () => {
	return (
		<div className="home" id="home"> 
			<div className="abc">
				<div className="landing__top">
					<Header />
					<HeroSection />
				</div>

			</div>

			<div id="search">
				<input
					type="text"
					placeholder="Search for names, topics, college or related keywords...."
				/>
			</div>

			<div className="cards">
				<Card name="Anshum Shrivastava" role="COMPUTER SCIENCE ENGINEER" place="Chitkara University, Rajpura" rating="⭐⭐⭐⭐" />
				<Card name="Ishant Singhal" role="COMPUTER SCIENCE ENGINEER" place="Chitkara University, Rajpura" rating="⭐⭐⭐⭐" />
				<Card name="Ishan Thakur" role="COMPUTER SCIENCE ENGINEER" place="Chitkara University, Rajpura" rating="⭐⭐⭐⭐" />
				<Card name="Rajan Sharma" role="COMPUTER SCIENCE ENGINEER" place="Chitkara University, Rajpura" rating="⭐⭐⭐⭐" />

			</div>

			<div className="testimonials">
				<Testimonial right={false} />
				<Testimonial right={true} />
				<Testimonial right={false} />
			</div>

			<DownloadApp />

			<About />

			<Contact />
		</div>
	);
};

export default Home;

import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<nav>
			<div className="header__icon">
				<img src="" alt="" />
				<h1>Progeta</h1>
			</div>

			<div className="nav__links">
				<a href="#home">Home</a>
				<a href="#contact">Contact Us</a>
				<a href="#about us">About Us</a>
				<a href="#download">Download</a>
			</div>

			<div className="nav__actions">
				<a href="https://i0.wp.com/w3schoolweb.com/wp-content/uploads/2020/10/3.png?resize=780%2C470&ssl=1" id="authBtn" target="_blank">Login or Register</a>
			</div>
		</nav>
	);
};

export default Header;

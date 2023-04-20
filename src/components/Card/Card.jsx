import React from "react";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="card__container">
			<div className="img">
				<img src="" alt="" />
			</div>

			
			<h4>{props.name}</h4>
			
			<h5>{props.role}</h5>

			<h5>{props.place}</h5>

			<div className="rating">{props.rating}</div>
		</div>
	);
};

export default Card;

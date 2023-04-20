import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
	// const { left } = props;
	if(props.right){
		return (
			<div className="testimonial">
				<div className="testimonial__text">
					<p>
						"“Got a clear idea about the college I was going to enter and also how to get maximum out of it."
					</p>
				</div>
				<div className="testimonial__image">
					{" "}
					<img src="" alt="" />
				</div>
	
			</div>
		);
	}else{
		return (
			<div className="testimonial">
				<div className="testimonial__image">
					{" "}
					<img src="" alt="" />
				</div>
				<div className="testimonial__text">
					<p>
						"“Got a clear idea about the college I was going to enter and also how to get maximum out of it."
					</p>
				</div>
			
	
			</div>
		);
	}
	
};

export default Testimonial;

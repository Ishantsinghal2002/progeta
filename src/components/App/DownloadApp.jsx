import React from "react";
import "./DownloadApp.css";

const DownloadApp = () => {
	return (
		<div className="downloadApp" id="download">
			<div className="downloadApp__left">
				<h2>Download Our App</h2>

				<div className="downloadApp__text">
					<p>
					Transforming the College Decision-Making Process with Progeta! Seekers, download our app or visit our 
					website to gain unfiltered insights from college insiders. Insiders, sign up to share your invaluable
				    wisdom and make a meaningful impact. Join us in empowering students today! 
					</p>

					<p>
					Get the app today and empower
					students with progeta!
					</p>
					

				
				</div>

				<button id="appBtn">Coming Soon</button>
			</div>

			<div className="downloadApp__right">
				<img src="src\components\App\phone.png" />
			</div>
		</div>
	);
};

export default DownloadApp;

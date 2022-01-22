import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<div
						className="col"
						style={{ marginTop: "25px", marginBottom: "25px" }}>
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">card2</div>
					<div className="col-3">card3</div>
					<div className="col-3">card4</div>
				</div>
				footer
			</div>
		</div>
	);
};

export default Home;

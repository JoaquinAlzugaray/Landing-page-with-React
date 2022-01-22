import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer.jsx";

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
				<div
					className="row"
					style={{ marginTop: "25px", marginBottom: "25px" }}>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

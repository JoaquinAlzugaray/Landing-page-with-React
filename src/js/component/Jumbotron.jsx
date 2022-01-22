import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron" style={{ backgroundColor: "#F0F1F2" }}>
			<h1
				className="display-4"
				style={{ margin: "16px", paddingTop: "25px" }}>
				A Warm Welcome!
			</h1>
			<p style={{ margin: "16px" }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="#"
				role="button"
				style={{ margin: "16px", marginBottom: "25px" }}>
				<strong>Call to action!</strong>
			</a>
		</div>
	);
};

export default Jumbotron;

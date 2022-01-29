import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import "./home.css";

//create your first component
const Home = () => {
	return (
		<div>
			<p>
				<Navbar />
				<div className="homeDiv">
					<Jumbotron />
				</div>
				<div className="cardDiv">
					<Cards />
				</div>
				<Footer />
			</p>
		</div>
	);
};

export default Home;

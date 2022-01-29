import React from "react";
import Card from "./Card.jsx";
import "./cards.css";

class Cards extends React.Component {
	render() {
		return (
			<div class="cards">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default Cards;

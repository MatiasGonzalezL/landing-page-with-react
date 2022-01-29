import React from "react";
import "./card.css";
import rigobaby from "./Images/rigobaby.jpg";

class Card extends React.Component {
	render() {
		return (
			<div class="card">
				<img src={rigobaby} class="card-img-top" alt="Rigo Baby"></img>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" class="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		);
	}
}

export default Card;

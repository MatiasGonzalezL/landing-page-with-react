import React from "react";
import "./jumbotron.css";

class Jumbotron extends React.Component {
	render() {
		return (
			<div class="jumbotron">
				<h1 class="display-4">A warm welcome!</h1>
				<p class="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="#" role="button">
						Call to action!
					</a>
				</p>
			</div>
		);
	}
}

export default Jumbotron;

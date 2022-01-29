import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<div
						class="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div class="navbar-nav">
							<a
								class="nav-link active"
								id="nav-link"
								aria-current="page"
								href="#">
								Home
							</a>
							<a class="nav-link" id="nav-linkTwo" href="#">
								About
							</a>
							<a class="nav-link" id="nav-linkThree" href="#">
								Services
							</a>
							<a class="nav-link" id="nav-linkFour">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;

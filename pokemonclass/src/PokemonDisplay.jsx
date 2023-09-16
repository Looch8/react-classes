import React from "react";

// Extend from Component to make sure this works as a React component
export default class PokemonDisplay extends React.Component {
	constructor(props) {
		super(props);

		// State stores data per component
		this.state = {
			pokemon: null,
		};
	}

	componentDidMount() {
		console.log("PokemonDisplay mounted");
	}

	componentWillUnmount() {
		console.log("PokemonDisplay unmounted");
	}

	// Render is how we return JSX up to the react app
	// so that something is displayed to the browser
	render() {
		return (
			<div>
				<h1>Pokemon Display</h1>
			</div>
		);
	}
}

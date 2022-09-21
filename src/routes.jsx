import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, Characters, Episodes, Locations } from "./pages";

function App() {
	return (
		<Switch>
			<Route path="/characters" component={Characters} />
			<Route path="/episodes" component={Episodes} />
			<Route path="/locations" component={Locations} />
			<Route path="/" component={HomePage} />
		</Switch>
	);
}

export default App;

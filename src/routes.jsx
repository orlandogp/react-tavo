import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
	return (
		<Switch>
			<Route path="/" component={HomePage} />
		</Switch>
	);
}

export default App;

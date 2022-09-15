import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<React.StrictMode>
			<Routes />
		</React.StrictMode>
	</Router>
);

import React from "react";

import { Navigation } from "../../components";

export const Layout = ({ children }) => {
	return (
		<>
			<Navigation />

			{children}

			<h1>Footer</h1>
		</>
	);
};

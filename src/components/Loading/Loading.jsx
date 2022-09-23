import React from "react";

import { Spinner } from "../Spinner";

export const Loading = ({ titleLoading }) => {
	return (
		<div className="loading">
			<img
				src="https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Pic.png"
				alt="img rick and morty"
				width="300px"
				height="300px"
			/>
			<Spinner />
			<p className="loading-text">{titleLoading || "Loading..."}</p>
		</div>
	);
};

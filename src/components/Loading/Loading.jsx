import React from "react";

export const Loading = ({ titleLoading }) => {
	return (
		<div className="flex w-screen h-screen bg-slate-50 p-5 justify-center items-center flex-col">
			<img
				src="https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Pic.png"
				alt="img rick and morty"
				width="300px"
				height="300px"
			/>
			<p className="text-3xl text-blue-600 font-semibold">
				{titleLoading || "Loading..."}
			</p>
		</div>
	);
};

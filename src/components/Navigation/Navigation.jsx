//REACT
import React from "react";
import { Link } from "react-router-dom";

//HOOKS
import { useNavigation } from "../../hooks";

//STYLES
import "./styles.css";

export const Navigation = () => {
	const { response } = useNavigation();
	return (
		<>
			<nav className="bg-slate-500">
				<ul className="flex justify-center items-center p-5 gap-10 text-green-600">
					{response &&
						Object.keys(response).map((key, index) => (
							<li
								className="cursor-pointer hover:bg-orange-500"
								key={index}
							>
								<Link to={key}>{key}</Link>
							</li>
						))}
				</ul>
			</nav>
		</>
	);
};

// REACT
import React from "react";
//COMPONENTS
import { Layout, Loading } from "../../components";
//HOOKS
import { useHome } from "../../hooks";
//UTILS

export const HomePage = () => {
	const { response, isError, isLoading } = useHome();

	console.log({ response, isError, isLoading });

	if (isLoading) return <Loading />;
	if (isError) return <h1>Error!</h1>;

	return (
		<Layout>
			<h1>Body</h1>
		</Layout>
	);
};

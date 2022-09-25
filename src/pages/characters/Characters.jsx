import React from "react";
import { Layout, Loading, Error, ListCharacter } from "../../components";
import { useCharacters } from "../../hooks";

export const Characters = () => {
	const { characters, isError, isLoading } = useCharacters();
	return (
		<Layout>
			<h1 className='title'>Explore all characters</h1>
			{isLoading ? (
				<Loading />
			) : isError ? (
				<Error />
			) : (
				<ListCharacter character={characters} />
			)}
		</Layout>
	);
};

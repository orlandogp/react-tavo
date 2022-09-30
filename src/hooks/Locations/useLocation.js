import { useEffect, useState } from "react";
import axios from "axios";

export const useLocation = () => {
	const [locations, setLocations] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getLocations = async () => {
			try {
				const { data } = await axios.get(
					`https://rickandmortyapi.com/api/location`
				);
				const { results } = data;
				setIsLoading(false);
				setLocations(results);
			} catch (error) {
				setIsError(true);
				setIsLoading(false);
			}
		};
		getLocations();
	}, []);

	return { locations, isLoading, isError };
};

import { useEffect, useState } from "react";
import axios from "axios";

export const useNavigation = () => {
	const [response, setResponse] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getResponse = async () => {
			try {
				const { data } = await axios.get(
					`https://rickandmortyapi.com/api`
				);

				setResponse(data);
				setIsLoading(false);
			} catch (e) {
				setIsError(true);
				setIsLoading(false);
				console.log(e);
			}
		};

		getResponse();
	}, []);

	return {
		response,
		isError,
		isLoading,
	};
};

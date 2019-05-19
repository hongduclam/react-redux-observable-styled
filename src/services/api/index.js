import { restClient } from "../../utils/restClient";

export const getListItems = ({ limit, offset }) => {
	return restClient.get(
		`v1/gifs/trending?api_key=ffZyZkUFk2armHEaoyF1eSfcOnXbyeXl&limit=${limit}&offset=${offset}&rating=G`
	);
};

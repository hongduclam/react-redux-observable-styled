import { restClient } from "../../utils/restClient";

export const getListItems = ({ limit }) => {
	console.log("getListItems");
	return restClient
		.get(`v1/gifs/trending?api_key=ffZyZkUFk2armHEaoyF1eSfcOnXbyeXl&limit=${limit}&rating=G`)
		.map(rp => {
			console.log(rp);
		});
};

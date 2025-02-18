import axios from "axios";
import { config } from "config/env";

export const fetchVideoDetails = async (videoId: string) => {
	const { data } = await axios.get(`${config.YOUTUBE_API_URL}/videos`, {
		params: {
			id: videoId,
			part: "snippet,contentDetails,statistics,status",
			key: config.YOUTUBE_API_KEY,
		},
	});

	if (!data.items?.length) {
		throw new Error("video not found :(");
	}

	return data;
};

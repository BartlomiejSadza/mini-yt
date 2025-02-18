import axios from "axios";
import { config } from "config/env";
import { YouTubeResponse } from "types/youTubeResponse";

export async function fetchCategoryVideos(category: string) {
	const { data } = await axios.get<YouTubeResponse>(
		`${config.YOUTUBE_API_URL}/search`,
		{
			params: {
				part: "snippet",
				q: category,
				type: "video",
				maxResults: 5,
				key: config.YOUTUBE_API_KEY,
			},
		}
	);
	return data.items;
}

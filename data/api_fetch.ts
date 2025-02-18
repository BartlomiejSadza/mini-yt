import axios from "axios";
import { config } from "../config/env";
import { YouTubeResponse } from "../types/youTubeResponse";

export async function fetchVideos(query: string) {
	const { data } = await axios.get<YouTubeResponse>(
		`${config.YOUTUBE_API_URL}/search`,
		{
			params: {
				part: "snippet",
				q: query,
				type: "video",
				maxResults: 100,
				key: config.YOUTUBE_API_KEY,
			},
		}
	);
	return data.items;
}

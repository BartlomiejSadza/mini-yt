const API_KEY = "AIzaSyAXr30-BsbSn0PXxBo1EJ0xhy2xC-whyCs";

interface YouTubeResponse {
	items: YouTubeItem[];
}

interface YouTubeItem {
	kind: string;
	etag: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: { url: string };
			medium: { url: string };
			high: { url: string };
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
}

async function fetchVideos(query: string) {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=100&key=${API_KEY}`;

	const response = await fetch(url);
	const data: YouTubeResponse = await response.json();
	return data.items;
}

export default fetchVideos;

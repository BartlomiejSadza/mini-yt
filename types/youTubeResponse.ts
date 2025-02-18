export interface YouTubeItem {
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

export interface YouTubeResponse {
	items: YouTubeItem[];
}

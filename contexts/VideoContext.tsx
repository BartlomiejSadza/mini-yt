import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import fetchVideos from "data/api_fetch";

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
		publishTime: string;
	};
}

interface VideoContextType {
	videos: YouTubeItem[];
	setVideos: (videos: YouTubeItem[]) => void;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	searchVideos: (query: string) => Promise<void>;
	loading: boolean;
	error: string | null;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: ReactNode }) {
	const [videos, setVideos] = useState<YouTubeItem[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		searchVideos("React native");
	}, []);

	const searchVideos = async (query: string) => {
		setLoading(true);
		try {
			const response = await fetchVideos(query);
			setVideos(response);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Search failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<VideoContext.Provider
			value={{
				videos,
				setVideos,
				searchQuery,
				setSearchQuery,
				searchVideos,
				loading,
				error,
			}}>
			{children}
		</VideoContext.Provider>
	);
}

export function useVideo() {
	const context = useContext(VideoContext);
	if (!context) {
		throw new Error("useVideo must be used within VideoProvider");
	}
	return context;
}

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "data/api_fetch";
import { YouTubeItem } from "types/youTubeResponse";

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
	const [searchQuery, setSearchQuery] = useState("React Native");
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState<string | null>(null);

	const {
		data,
		isLoading,
		isError,
		error: queryError,
		refetch,
	} = useQuery({
		queryKey: ["videos", searchQuery],
		queryFn: () => fetchVideos(searchQuery),
		enabled: !!searchQuery,
	});

	const searchVideos = async (query: string) => {
		setSearchQuery(query);
		refetch();
	};

	useEffect(() => {
		if (data) setVideos(data);
	}, [data]);

	return (
		<VideoContext.Provider
			value={{
				videos,
				setVideos,
				searchQuery,
				setSearchQuery,
				searchVideos,
				loading: isLoading,
				error: isError ? (queryError as Error)?.message : null,
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

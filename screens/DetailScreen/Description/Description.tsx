import { ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import {
	LoadingState,
	ErrorState,
	VideoHeader,
	VideoTabs,
	VideoDescription,
	VideoStats,
} from "./descriptionComponents";
import styles from "./DescriptionStyle";
import { fetchVideoDetails } from "data/videoDetailFetch";

export default function Description(): JSX.Element {
	const { id } = useLocalSearchParams<{ id: string }>();

	const {
		data: video,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["video", id],
		queryFn: () => fetchVideoDetails(id),
		enabled: !!id,
	});

	if (isLoading) return <LoadingState />;
	if (error) return <ErrorState message={error.message} />;
	if (!video?.items?.[0]) return <ErrorState message='Video not found' />;

	const { snippet, statistics } = video.items[0];

	return (
		<SafeAreaView style={styles.contentContainer}>
			<VideoHeader title={snippet.title} channelTitle={snippet.channelTitle} />
			<VideoTabs />
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={true}>
				<VideoDescription description={snippet.description} />
			</ScrollView>
			<VideoStats statistics={statistics} />
		</SafeAreaView>
	);
}

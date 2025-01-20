import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
	LoadingState,
	ErrorState,
	VideoHeader,
	VideoTabs,
	VideoDescription,
	VideoStats,
} from "./descriptionComponents";
import { YouTubeResponse } from "./types";
import styles from "./DescriptionStyle";

export default function Description(): JSX.Element {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [video, setVideo] = useState<YouTubeResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDetails = async (): Promise<void> => {
			if (!id) {
				setError("No video ID provided");
				setLoading(false);
				return;
			}

			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,contentDetails,statistics,status&key=AIzaSyCq1fDsYSBYAXN1F41QQxLSBOGMYn6gXEQ`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();

				if (!data.items?.length) {
					throw new Error("No video found");
				}

				setVideo(data);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : "Failed to load video"
				);
			} finally {
				setLoading(false);
			}
		};

		void fetchDetails();
	}, [id]);

	if (loading) return <LoadingState />;
	if (error) return <ErrorState message={error} />;
	if (!video?.items?.[0]) return <ErrorState message='Video not found' />;

	const { snippet, statistics } = video.items[0];

	return (
		<View style={styles.contentContainer}>
			<VideoHeader title={snippet.title} channelTitle={snippet.channelTitle} />
			<VideoTabs />
			<VideoDescription description={snippet.description} />
			<VideoStats statistics={statistics} />
		</View>
	);
}

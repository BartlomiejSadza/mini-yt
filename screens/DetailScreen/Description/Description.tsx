import React from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useVideo } from "contexts/VideoContext";

import styles from "./DescriptionStyle";

// TODO - zaimplementować komponent Description i propsy
export default function Description() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { videos } = useVideo();

	const video = videos.find((video) => video.id.videoId === id);

	if (!video) return null;

	return (
		<View style={styles.contentContainer}>
			<Text style={styles.videoTitle}>{video.snippet.title}</Text>
			<Image
				source={require("assets/recruitment_task_assets/app-icon.png")}
				style={{ width: 24, height: 24 }}
			/>
			<Text style={styles.channelName}>{video.snippet.channelTitle}</Text>

			{/* Przykład "tabów" - w uproszczeniu */}
			<View style={styles.tabsWrapper}>
				<Text style={styles.activeTab}>Details</Text>
				<Text style={styles.inactiveTab}>Notes</Text>
			</View>

			<Text style={styles.descriptionTitle}>Description</Text>
			<Text style={styles.descriptionText}>{video.snippet.description}</Text>

			<Text style={styles.statsTitle}>Statistics</Text>
			<View style={styles.statsRow}>
				<View style={styles.statItem}>
					<Text style={styles.statText}>25268952 views</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statText}>12345 likes</Text>
				</View>
			</View>
		</View>
	);
}

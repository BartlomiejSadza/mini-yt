import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import styles from "./DescriptionStyle";

interface YouTubeResponse {
	items: {
		snippet: {
			title: string;
			channelTitle: string;
			description: string;
			thumbnails: {
				maxres: {
					url: string;
				};
			};
		};
		statistics: {
			viewCount: string;
			likeCount: string;
			commentCount: string;
		};
		contentDetails: {
			duration: string;
		};
	}[];
}

export default function Description() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [video, setVideo] = useState<YouTubeResponse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDetails = async () => {
			console.log("Fetching details for id:", id); // Debug log

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
				console.log("API Response:", data); // Debug log

				if (!data.items || data.items.length === 0) {
					throw new Error("No video found");
				}

				setVideo(data);
			} catch (error) {
				console.error("Fetch error:", error);
				setError(
					error instanceof Error ? error.message : "Failed to load video"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchDetails();
	}, [id]);

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>{error}</Text>
			</View>
		);
	}

	if (!video?.items?.[0]) {
		return (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>Video not found</Text>
			</View>
		);
	}

	const videoData = video.items[0];
	const { snippet, statistics } = videoData;

	console.log("Rendering video:", videoData); // Debug log

	const formatNumber = (num: string) => {
		return parseInt(num).toLocaleString();
	};

	return (
		<View style={styles.contentContainer}>
			<Text style={styles.videoTitle}>{snippet.title}</Text>
			<Image
				source={require("assets/recruitment_task_assets/app-icon.png")}
				style={{ width: 24, height: 24 }}
			/>
			<Text style={styles.channelName}>{snippet.channelTitle}</Text>

			<View style={styles.tabsWrapper}>
				<Text style={styles.activeTab}>Details</Text>
				<Text style={styles.inactiveTab}>Notes</Text>
			</View>

			<Text style={styles.descriptionTitle}>Description</Text>
			<Text style={styles.descriptionText}>{snippet.description}</Text>

			<Text style={styles.statsTitle}>Statistics</Text>
			<View style={styles.statsRow}>
				<View style={styles.statItem}>
					<Text style={styles.statText}>
						{formatNumber(statistics.viewCount)} views
					</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statText}>
						{formatNumber(statistics.likeCount)} likes
					</Text>
				</View>
			</View>
		</View>
	);
}

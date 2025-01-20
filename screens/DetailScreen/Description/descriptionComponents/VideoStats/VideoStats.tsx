import { View, Text, Image } from "react-native";
import { YouTubeVideoDetails } from "../../types";
import { formatNumber } from "../../utils";
import styles from "../../DescriptionStyle";

interface VideoStatsProps {
	statistics: YouTubeVideoDetails["statistics"];
}

export const VideoStats = ({ statistics }: VideoStatsProps) => (
	<View style={styles.statsRow}>
		<View style={styles.statItem}>
			<Image
				source={require("assets/images/monitor.png")}
				style={styles.icon}
			/>
			<Text style={styles.statText}>
				{formatNumber(statistics.viewCount)} views
			</Text>
		</View>
		<View style={styles.statItem}>
			<Image source={require("assets/images/like.png")} style={styles.icon} />
			<Text style={styles.statText}>
				{formatNumber(statistics.likeCount)} likes
			</Text>
		</View>
	</View>
);

import { View, Text } from "react-native";
import { YouTubeVideoDetails } from "../../types";
import { formatNumber } from "../../utils";
import styles from "../../DescriptionStyle";

interface VideoStatsProps {
  statistics: YouTubeVideoDetails["statistics"];
}

export const VideoStats = ({ statistics }: VideoStatsProps) => (
  <View style={styles.statsRow}>
    <View style={styles.statItem}>
      <Text style={styles.statText}>{formatNumber(statistics.viewCount)} views</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statText}>{formatNumber(statistics.likeCount)} likes</Text>
    </View>
  </View>
);
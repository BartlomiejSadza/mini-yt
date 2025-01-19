import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./DescriptionStyle";

// TODO - zaimplementować komponent Description i propsy
const Description = () => {
	return (
		<View style={styles.contentContainer}>
			<Text style={styles.videoTitle}>
				Lorem ipsum dolor sit amet, consect...
			</Text>
			<Image
				source={require("assets/recruitment_task_assets/app-icon.png")}
				style={{ width: 24, height: 24 }}
			/>
			<Text style={styles.channelName}>Channel name</Text>

			{/* Przykład "tabów" - w uproszczeniu */}
			<View style={styles.tabsWrapper}>
				<Text style={styles.activeTab}>Details</Text>
				<Text style={styles.inactiveTab}>Notes</Text>
			</View>

			<Text style={styles.descriptionTitle}>Description</Text>
			<Text style={styles.descriptionText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
				venenatis semper purus a accumsan. Donec accumsan pulvinar metus,
				euismod lacinia libero congue non. Vivamus ut massa finibus...
			</Text>

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
};

export default Description;

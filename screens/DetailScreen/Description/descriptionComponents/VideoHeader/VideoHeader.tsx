import { View, Text, Image } from "react-native";
import styles from "../../DescriptionStyle";

interface VideoHeaderProps {
	title?: string;
	channelTitle: string;
}

export const VideoHeader = ({ title, channelTitle }: VideoHeaderProps) => (
	<View>
		<Text style={styles.videoTitle}>{title}</Text>
		<View style={styles.channelContainer}>
			<View style={styles.channelWrapper}>
				<Image
					source={require("assets/images/person.png")}
					style={styles.channelImage}
				/>
			</View>
			<Text style={styles.channelName}>{channelTitle}</Text>
		</View>
	</View>
);

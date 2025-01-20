import { View, Text } from "react-native";
import styles from "../../DescriptionStyle";

export const VideoTabs = () => (
	<View style={styles.tabsWrapper}>
		<View style={styles.activeTab}>
			<Text style={styles.activeTab_text}>Details</Text>
		</View>
		<View style={styles.inactiveTab}>
			<Text style={styles.inactiveTab_text}>Notes</Text>
		</View>
	</View>
);

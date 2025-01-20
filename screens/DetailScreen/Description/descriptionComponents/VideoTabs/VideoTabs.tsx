import { View, Text } from "react-native";
import styles from "../../DescriptionStyle";

export const VideoTabs = () => (
  <View style={styles.tabsWrapper}>
    <Text style={styles.activeTab}>Details</Text>
    <Text style={styles.inactiveTab}>Notes</Text>
  </View>
);
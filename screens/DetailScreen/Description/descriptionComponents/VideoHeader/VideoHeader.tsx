import { View, Text, Image } from "react-native";
import styles from "../../DescriptionStyle";

interface VideoHeaderProps {
  title: string;
  channelTitle: string;
}

export const VideoHeader = ({ title, channelTitle }: VideoHeaderProps) => (
  <View>
    <Text style={styles.videoTitle}>{title}</Text>
    <Image
      source={require("assets/recruitment_task_assets/app-icon.png")}
      style={{ width: 24, height: 24 }}
    />
    <Text style={styles.channelName}>{channelTitle}</Text>
  </View>
);
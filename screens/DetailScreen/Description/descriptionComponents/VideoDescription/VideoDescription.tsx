import { View, Text } from "react-native";
import styles from "../../DescriptionStyle";

interface VideoDescriptionProps {
  description: string;
}

export const VideoDescription = ({ description }: VideoDescriptionProps) => (
  <View>
    <Text style={styles.descriptionTitle}>Description</Text>
    <Text style={styles.descriptionText}>{description}</Text>
  </View>
);
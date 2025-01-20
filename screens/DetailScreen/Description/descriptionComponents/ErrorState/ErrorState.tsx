import { View, Text } from "react-native";
import styles from "../../DescriptionStyle";

interface ErrorStateProps {
  message: string;
}

export const ErrorState = ({ message }: ErrorStateProps) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{message}</Text>
  </View>
);
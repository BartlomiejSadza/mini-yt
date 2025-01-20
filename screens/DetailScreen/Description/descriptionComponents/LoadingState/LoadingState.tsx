import { View, ActivityIndicator } from "react-native";
import styles from "../../DescriptionStyle";

export const LoadingState = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" />
  </View>
);
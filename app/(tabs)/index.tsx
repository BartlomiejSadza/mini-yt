import { useFonts } from "expo-font";
import { View, StyleSheet } from "react-native";
import HomeScreen from "screens/HomeScreen/HomeScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("assets/fonts/Poppins-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<HomeScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

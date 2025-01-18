import { useFonts } from "expo-font";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("assets/fonts/Poppins-Bold.ttf"),
	});

	const [logging, setIsLogging] = useState(true);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			{logging ?
				<LoginScreen onPressFunc={() => setIsLogging(!logging)} />
			:	<HomeScreen />}
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

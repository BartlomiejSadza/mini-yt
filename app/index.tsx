import { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";

export default function App() {
	const [logging, setIsLogging] = useState(true);

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

import { useState } from "react";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import { View, Text } from "react-native";

export default function App() {
	const [logging, isLogging] = useState(true);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			{logging ? <LoginScreen /> : <Text>Logowanie</Text>}
		</View>
	);
}

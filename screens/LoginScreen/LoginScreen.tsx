import { View, Text, Image } from "react-native";
import styles from "./LoginScreenStyle";

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={require("assets/images/logo-yt.png")}
				style={styles.logoImage}
			/>
			<Text>Logowanie</Text>
		</View>
	);
}

import { View, Text, Image, Pressable } from "react-native";
import styles from "./LoginScreenStyle";

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.container_header}>
				<Image
					source={require("assets/images/log_title-image.png")}
					style={styles.titleImage}
					resizeMode='center'
				/>
			</View>
			<View style={styles.container_center}>
				<Image
					source={require("assets/images/log_logo-yt.png")}
					style={styles.logoImage}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.container_bottom}>
				<Pressable style={styles.loginButton}>
					<Text style={styles.titleText}>Log in as a guest</Text>
				</Pressable>
			</View>
		</View>
	);
}

import { View, Text, Image } from "react-native";
import styles from "./LoginScreenStyle";
import Button from "components/Button/Button";

type onPressProp = {
	onPressFunc: () => void;
};
export default function LoginScreen({ onPressFunc }: onPressProp) {
	return (
		<View style={styles.container}>
			<View style={styles.container_header}>
				<Image
					source={require("assets/images/log_title-image.png")}
					style={styles.titleImage}
					resizeMode='cover'
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
				<Text style={styles.text}>
					{"Welcome to the best \nYouTube-based learning application."}
				</Text>
				<Button title='Log in as guest' onPress={onPressFunc} />
				<Text style={styles.bottomText}>
					By logging in, you accept the {"\n"}Terms of Service and Privacy
					Policy.
				</Text>
			</View>
		</View>
	);
}
// TODO Pressable link to terms of service and privacy policy
// TODO Fonts in Fonts.ts

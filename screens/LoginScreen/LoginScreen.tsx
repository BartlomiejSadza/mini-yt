import { View, Text, Image } from "react-native";
import { useState } from "react";
import styles from "./LoginScreenStyle";
import Button from "components/Button/Button";
import TermsModal from "modals/TermsModal";

type onPressProp = {
	onPressFunc: () => void;
};
export default function LoginScreen({ onPressFunc }: onPressProp) {
	const [termsVisible, setTermsVisible] = useState(false);

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
					By logging in, you accept the{" "}
					<Text onPress={() => setTermsVisible(true)} style={styles.termsText}>
						Terms of Service
					</Text>{" "}
					and{" "}
					<Text onPress={() => setTermsVisible(true)} style={styles.termsText}>
						Privacy Policy
					</Text>
					.
				</Text>
			</View>
			<TermsModal
				visible={termsVisible}
				onClose={() => setTermsVisible(false)}
			/>
		</View>
	);
}

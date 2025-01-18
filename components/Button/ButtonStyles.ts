import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const buttonStyles = StyleSheet.create({
	container: {
		width: "90%",
		backgroundColor: Colors.accent,
		borderRadius: 12,
		padding: 12,
		alignItems: "center",
		justifyContent: "center",
	},
	loginButtonPressed: {
		width: "90%",
		backgroundColor: Colors.accent,
		borderRadius: 12,
		padding: 12,
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.8,
		transform: [{ scale: 0.95 }],
	},
	loginButtonText: {
		color: Colors.white,
		fontSize: 22,
		fontWeight: 600,
	},
});
export default buttonStyles;

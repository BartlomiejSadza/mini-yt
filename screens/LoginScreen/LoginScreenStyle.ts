import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import { Fonts, FontSizes } from "../../styles/Fonts";

const LoginScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		fontFamily: Fonts.Regular,
		backgroundColor: Colors.primary,
		padding: 20,
	},
	container_header: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container_center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container_bottom: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: Colors.white,
		fontSize: FontSizes.xl,
		fontWeight: "700",
		textAlign: "left",
		marginBottom: 20,
	},
	bottomText: {
		color: Colors.white,
		fontSize: FontSizes.md,
		textAlign: "center",
		marginTop: 20,
		lineHeight: 24,
	},
	titleImage: {
		width: 290,
		height: 115,
	},
	logoImage: {
		width: 128,
		height: 128,
	},
	termsText: {
		color: Colors.accent,
		textDecorationLine: 'underline',
	},
});
export default LoginScreenStyle;

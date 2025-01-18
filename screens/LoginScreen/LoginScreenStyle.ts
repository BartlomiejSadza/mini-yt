import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const LoginScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
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
		fontSize: 26,
		textAlign: "left",
		fontWeight: "bold",
		marginBottom: 20,
	},
	bottomText: {
		color: Colors.white,
		fontSize: 16,
		textAlign: "center",
		marginTop: 20,
	},
	titleImage: {
		width: 290,
		height: 115,
	},
	logoImage: {
		width: 128,
		height: 128,
	},
});
export default LoginScreenStyle;

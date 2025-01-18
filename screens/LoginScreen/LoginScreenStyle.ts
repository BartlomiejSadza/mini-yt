import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const LoginScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleImage: {
		width: 100,
		height: 100,
	},
	logoImage: {
		width: 100,
		height: 100,
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	loginButton: {
		backgroundColor: Colors.accent,
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
});
export default LoginScreenStyle;

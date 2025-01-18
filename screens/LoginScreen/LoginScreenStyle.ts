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
	titleImage: {
		width: 256,
		height: 64,
	},
	logoImage: {
		width: 128,
		height: 128,
	},

});
export default LoginScreenStyle;

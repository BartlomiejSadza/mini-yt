import { StyleSheet } from "react-native";
import Colors from "styles/Colors";

const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		top: 0,
		backgroundColor: Colors.white,
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 8,
		backgroundColor: Colors.white,
	},
});

export default HomeStyles;

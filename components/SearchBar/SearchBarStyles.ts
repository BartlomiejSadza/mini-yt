import { StyleSheet } from "react-native";
import Colors from "styles/Colors";

const SearchBarStyles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 16,
		backgroundColor: Colors.white,
	},
	searchBar: {
		height: 44,
		width: "80%",
		backgroundColor: Colors.white,
		borderWidth: 2,
		borderRadius: 16,
		paddingHorizontal: 12,
	},
	settingsIcon: {
		width: 32,
		height: 32,
	},
});

export default SearchBarStyles;

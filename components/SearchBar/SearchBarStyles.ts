import { StyleSheet } from "react-native";
import Colors from "styles/Colors";

const SearchBarStyles = StyleSheet.create({
	searchBar: {
		height: 44,
		minWidth: "80%",
		maxWidth: "90%",
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

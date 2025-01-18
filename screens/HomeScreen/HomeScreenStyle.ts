import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		backgroundColor: Colors.white,
	},
	searchBar: {
		flex: 1,
		height: 44,
		// width: 200,
		backgroundColor: Colors.white,
		borderWidth: 2,
		borderRadius: 16,
		paddingHorizontal: 12,
	},
	settingsIcon: {
		marginLeft: 8,
	},

	bottomNavigation: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingVertical: 25,
		backgroundColor: Colors.primary,
	},
	navItem: {
		fontSize: FontSizes.md,
		color: Colors.accent,
	},
});

export default HomeStyles;

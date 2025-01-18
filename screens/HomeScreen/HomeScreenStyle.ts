import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { Fonts, FontSizes } from "styles/Fonts";

const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
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
		fontFamily: Fonts.Regular,
	},
});

export default HomeStyles;

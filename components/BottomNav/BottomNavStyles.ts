import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { Fonts, FontSizes } from "styles/Fonts";

const BottomNavStyles = StyleSheet.create({
	bottomNavigation: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		height: "10%",
		backgroundColor: Colors.primary,
	},
	navItem: {
		flexDirection: "column",
		fontSize: FontSizes.md,
		color: Colors.accent,
		fontFamily: Fonts.Regular,
	},
});

export default BottomNavStyles;

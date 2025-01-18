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
		padding: 10,
	},
	navItem: {
		flexDirection: "column",
		fontSize: FontSizes.md,
		color: Colors.accent,
		fontFamily: Fonts.Regular,
		marginTop: "5%",
	},
	navIcon: {
		width: 26,
		height: 26,
		tintColor: Colors.accent,
		margin: "auto",
	},
});

export default BottomNavStyles;

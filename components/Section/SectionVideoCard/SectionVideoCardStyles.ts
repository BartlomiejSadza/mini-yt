import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const SectionVideoCardStyles = StyleSheet.create({
	card: {
		backgroundColor: Colors.white,
		marginHorizontal: 8,
		padding: 8,
		elevation: 2,
	},
	thumbnail: {
		width: "100%",
		height: 100,
		borderRadius: 12,
	},
	cardTitle: {
		fontSize: FontSizes.sm,
		fontWeight: "400",
		marginVertical: 4,
	},
	cardDate: {
		fontSize: FontSizes.xs,
		color: Colors.accent,
		marginTop: 2,
		textAlign: "right",
	},
});

export default SectionVideoCardStyles;

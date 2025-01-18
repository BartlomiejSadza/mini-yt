import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const SectionHeaderStyles = StyleSheet.create({
	sectionHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		marginBottom: 8,
	},
	sectionTitle: {
		fontSize: FontSizes.lg,
		fontWeight: "bold",
	},
	showMore: {
		color: Colors.accent,
		textDecorationLine: "underline",
	},
});

export default SectionHeaderStyles;

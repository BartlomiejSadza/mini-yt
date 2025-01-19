import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { Fonts, FontSizes } from "styles/Fonts";

const DescriptionStyle = StyleSheet.create({
	contentContainer: {
		padding: 16,
	},
	videoTitle: {
		fontSize: FontSizes.xl,
		fontWeight: "600",
		marginBottom: 4,
	},
	channelName: {
		fontSize: FontSizes.md,
		color: Colors.accent,
		marginBottom: 12,
	},
	tabsWrapper: {
		flexDirection: "row",
		marginBottom: 12,
	},
	activeTab: {
		fontWeight: "bold",
		marginRight: 20,
	},
	inactiveTab: {
		color: Colors.inactiveTab,
	},
	descriptionTitle: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	descriptionText: {
		fontSize: FontSizes.sm,
		color: Colors.accent,
		marginBottom: 16,
	},
	statsTitle: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	statsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		color: Colors.white,
	},
	statItem: {
		backgroundColor: Colors.accent,
		padding: 8,
		borderRadius: 4,
		width: "45%",
		alignItems: "center",
	},
	statText: {	
		color: Colors.white,
	},
});

export default DescriptionStyle;

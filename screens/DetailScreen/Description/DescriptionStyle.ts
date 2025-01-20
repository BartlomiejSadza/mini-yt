import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

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
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-around",
		color: Colors.white,
	},
	statItem: {
		backgroundColor: Colors.accent,
		padding: 8,
		borderRadius: 12,
		width: "45%",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	statText: {
		color: Colors.white,
		fontWeight: "bold",
	},
	icon: {
		width: 20,
		height: 20,
	},
});

export default DescriptionStyle;

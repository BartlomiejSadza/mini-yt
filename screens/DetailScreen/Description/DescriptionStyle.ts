import { StyleSheet } from "react-native";

const DescriptionStyle = StyleSheet.create({
	contentContainer: {
		padding: 16,
	},
	videoTitle: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 4,
	},
	channelName: {
		fontSize: 14,
		color: "#666",
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
		color: "#999",
	},
	descriptionTitle: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	descriptionText: {
		fontSize: 14,
		color: "#333",
		marginBottom: 16,
	},
	statsTitle: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	statsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	statItem: {
		backgroundColor: "#eee",
		padding: 8,
		borderRadius: 4,
		width: "45%",
		alignItems: "center",
	},
});

export default DescriptionStyle;

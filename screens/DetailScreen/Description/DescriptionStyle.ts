import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const DescriptionStyle = StyleSheet.create({
	contentContainer: {
		flex: 1,
		padding: 16,
		width: "94%",
		alignSelf: "center",
	},
	videoTitle: {
		margin: 8,
		fontSize: FontSizes.lg,
		fontWeight: "600",
		marginBottom: 4,
	},
	channelName: {
		fontSize: FontSizes.md,
		color: Colors.accent,
		marginLeft: 16,
		fontWeight: "bold",
	},
	tabsWrapper: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 16,
	},
	activeTab: {
		fontWeight: "bold",
		borderBottomColor: Colors.accent,
		borderBottomWidth: 2,
		width: "50%",
	},
	inactiveTab: {
		color: Colors.inactiveTab,
		borderBottomColor: Colors.inactiveTab,
		borderBottomWidth: 2,
		width: "50%",
	},
	activeTab_text: {
		color: Colors.accent,
		fontWeight: "bold",
		textAlign: "center",
	},
	inactiveTab_text: {
		color: Colors.inactiveTab,
		textAlign: "center",
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
	channelContainer: {
		paddingVertical: 16,
		paddingHorizontal: 8,
		flexDirection: "row",
		alignItems: "center",
	},
	channelWrapper: {
		width: 48,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		backgroundColor: Colors.accent,
	},
	channelImage: {
		width: 24,
		height: 24,
	},
});

export default DescriptionStyle;

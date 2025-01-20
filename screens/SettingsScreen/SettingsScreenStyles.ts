import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const settingsStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		padding: 20,
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	learningRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		marginLeft: 10,
	},
	learningImage: {
		width: 32,
		height: 32,
		marginRight: 10,
	},
	section: {
		borderTopWidth: 2,
		borderTopColor: Colors.accent,
		paddingTop: 20,
	},
	sectionTitle: {
		fontSize: FontSizes.md,
	},
	reminderRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	reminderText: {
		fontSize: FontSizes.sm,
		color: Colors.accent,
	},
	time: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
	},
	timeImage: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	timeText: {
		fontSize: FontSizes.sm,
		color: Colors.accent,
	},
	description: {
		fontSize: FontSizes.xs,
		color: Colors.accent,
		fontWeight: "700",
		marginTop: 20,
	},
});

export default settingsStyles;

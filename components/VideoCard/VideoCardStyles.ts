import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const VideoCardStyles = StyleSheet.create({
	section: {
		marginVertical: 16,
	},
	sectionHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		marginBottom: 8,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	showMore: {
		color: Colors.accent,
		textDecorationLine: "underline",
	},
	card: {
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderRadius: 8,
		marginHorizontal: 8,
		width: 200,
		padding: 8,
		elevation: 2,
	},
	thumbnail: {
		width: "100%",
		height: 100,
		borderRadius: 8,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 4,
	},
	cardDate: {
		fontSize: FontSizes.sm,
		color: Colors.accent,
		marginTop: 4,
	},
});

export default VideoCardStyles;

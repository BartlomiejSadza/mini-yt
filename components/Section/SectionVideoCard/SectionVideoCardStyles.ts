import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const THUMBNAIL_HEIGHT = {
	home: 100,
	search: 175,
};

const SectionVideoCardStyles = StyleSheet.create({
	card_home: {
		backgroundColor: Colors.white,
		padding: 8,
		elevation: 2,
		maxWidth: 250,
	},
	card_search: {
		backgroundColor: Colors.white,
		marginHorizontal: 8,
		padding: 8,
		elevation: 2,
		width: "100%",
	},

	thumbnailHome: {
		height: THUMBNAIL_HEIGHT.home,
		borderRadius: 12,
	},
	thumbnailSearch: {
		height: THUMBNAIL_HEIGHT.search,
		width: "100%",
		borderRadius: 12,
	},
	cardTitle: {
		fontSize: FontSizes.md,
		fontWeight: "400",
		marginVertical: 4,
	},
	cardDate: {
		fontSize: FontSizes.xs,
		color: Colors.accent,
		marginTop: 2,
		textAlign: "right",
	},
	cardChannel: {
		marginTop: 16,
		fontSize: FontSizes.xs,
		fontWeight: "800",
		color: Colors.accent,
	},
});

export default SectionVideoCardStyles;

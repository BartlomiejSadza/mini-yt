import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const SearchScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: Colors.white,
	},
	resultsInfo: {
		marginTop: 12,
		marginHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	resultsText: {
		fontSize: 14,
		color: Colors.accent,
		flex: 1,
		marginRight: 8,
	},
	searchTerm: {
		fontWeight: "600",
	},
	sortByText: {
		fontSize: FontSizes.sm,
		color: Colors.accent,
	},
	bold: {
		fontWeight: "700",
		color: Colors.accent,
	},
	list: {
		flex: 1,
		marginTop: 8,
	},
	cardContainer: {
		marginHorizontal: 16,
		marginBottom: 12,
		borderRadius: 8,
		overflow: "hidden",
	},
	topBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 8,
		backgroundColor: Colors.white,
	},
});

export default SearchScreenStyles;

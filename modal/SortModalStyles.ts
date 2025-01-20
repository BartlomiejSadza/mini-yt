import { StyleSheet } from "react-native";
import Colors from "styles/Colors";
import { FontSizes } from "styles/Fonts";

const sortModalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	overlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.overlay,
	},
	modalContainer: {
		width: "80%",
		backgroundColor: Colors.primary,
		borderRadius: 16,
		padding: 30,
	},
	modalTitle: {
		fontSize: FontSizes.lg,
		color: Colors.white,
		fontWeight: "bold",
		marginBottom: 20,
	},
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
		width: "100%",
	},
	radioCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: Colors.white,
		marginRight: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	radioDot: {
		width: 12,
		height: 12,
		borderRadius: 7,
		backgroundColor: Colors.accent,
	},
	optionText: {
		fontSize: FontSizes.md,
		color: Colors.white,
	},
	confirmButton: {
		marginTop: "35%",
		backgroundColor: Colors.accent,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 8,
	},
	confirmButtonText: {
		color: Colors.white,
		fontWeight: "bold",
		fontSize: FontSizes.md,
		textAlign: "center",
	},
});

export default sortModalStyles;

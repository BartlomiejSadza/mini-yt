import React, { useState } from "react";
import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	StyleSheet,
	Pressable,
} from "react-native";

interface SortModalProps {
	visible: boolean;
	onClose: () => void;
}

export default function SortModal({ visible, onClose }: SortModalProps) {
	const [selectedOption, setSelectedOption] = useState("Upload date: latest");
	const options = ["Upload date: latest", "Upload date: oldest", "Most popular"];

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.overlay}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Sort records by:</Text>
					{options.map((option) => (
						<Pressable
							key={option}
							onPress={() => handleOptionSelect(option)}
							style={styles.optionContainer}
						>
							<View
								style={[
									styles.radioCircle,
									selectedOption === option && styles.radioCircleSelected,
								]}
							/>
							<Text style={styles.optionText}>{option}</Text>
						</Pressable>
					))}
					<TouchableOpacity style={styles.confirmButton} onPress={onClose}>
						<Text style={styles.confirmButtonText}>Confirm</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
	},
	openButton: {
		padding: 12,
		backgroundColor: "#4F4F80",
		borderRadius: 8,
	},
	openButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
	overlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContainer: {
		width: "80%",
		backgroundColor: "#fff",
		borderRadius: 12,
		padding: 20,
		alignItems: "center",
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 20,
	},
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		width: "100%",
	},
	radioCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#4F4F80",
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	radioCircleSelected: {
		backgroundColor: "#4F4F80",
	},
	optionText: {
		fontSize: 16,
		color: "#333",
	},
	confirmButton: {
		marginTop: 20,
		backgroundColor: "#4F4F80",
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 8,
	},
	confirmButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
});

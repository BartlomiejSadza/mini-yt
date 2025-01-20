import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";

import sortModalStyles from "./SortModalStyles";

interface SortModalProps {
	visible: boolean;
	onClose: () => void;
	selectedOption: string;
	setSelectedOption: (option: string) => void;
}

export default function SortModal({
	visible,
	onClose,
	selectedOption,
	setSelectedOption,
}: SortModalProps) {
	const options = [
		"Upload date: latest",
		"Upload date: oldest",
		"Most popular",
	];

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<Modal
			animationType='fade'
			transparent
			visible={visible}
			onRequestClose={onClose}>
			<View style={sortModalStyles.overlay}>
				<View style={sortModalStyles.modalContainer}>
					<Text style={sortModalStyles.modalTitle}>Sort records by:</Text>
					{options.map((option) => (
						<Pressable
							key={option}
							onPress={() => handleOptionSelect(option)}
							style={sortModalStyles.optionContainer}>
							<View style={sortModalStyles.radioCircle}>
								{selectedOption === option && (
									<View style={sortModalStyles.radioDot} />
								)}
							</View>
							<Text style={sortModalStyles.optionText}>{option}</Text>
						</Pressable>
					))}
					<TouchableOpacity
						style={sortModalStyles.confirmButton}
						onPress={onClose}>
						<Text style={sortModalStyles.confirmButtonText}>Confirm</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

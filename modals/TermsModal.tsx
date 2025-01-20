import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import sortModalStyles from "./SortModalStyles";

interface TermsModalProps {
	visible: boolean;
	onClose: () => void;
}

export default function TermsModal({ visible, onClose }: TermsModalProps) {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={visible}
			onRequestClose={onClose}>
			<View style={sortModalStyles.overlay}>
				<View style={sortModalStyles.modalContainer}>
					<Text style={sortModalStyles.modalTitle}>Terms & Conditions</Text>

					<ScrollView style={{ maxHeight: 400 }}>
						<Text style={sortModalStyles.optionText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
							{"\n\n"}
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</Text>
					</ScrollView>

					<TouchableOpacity
						style={sortModalStyles.confirmButton}
						onPress={onClose}>
						<Text style={sortModalStyles.confirmButtonText}>I Understand</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

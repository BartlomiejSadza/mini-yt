import { View, Text, TouchableOpacity } from "react-native";
import SectionHeaderStyles from "./SectionHeaderStyles";

type SectionHeaderProps = {
	category: string;
	// onShowMore?: () => void; // TODO ShowMore Link handle
};

export default function Section({ category }: SectionHeaderProps) {
	return (
		<View style={SectionHeaderStyles.sectionHeader}>
			<Text style={SectionHeaderStyles.sectionTitle}>{category}</Text>
			<TouchableOpacity>
				<Text style={SectionHeaderStyles.showMore}>Show more</Text>
				{/* TODO ShowMore Link handle */}
			</TouchableOpacity>
		</View>
	);
}

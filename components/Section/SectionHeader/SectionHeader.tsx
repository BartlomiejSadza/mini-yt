import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import SectionHeaderStyles from "./SectionHeaderStyles";
import { useVideo } from "contexts/VideoContext";

type SectionHeaderProps = {
	category: string;
};

export default function Section({ category }: SectionHeaderProps) {
	const { setSearchQuery, searchVideos } = useVideo();

	const handleShowMore = async () => {
		await setSearchQuery(category);
		await searchVideos(category);
		router.push("/search");
	};

	return (
		<View style={SectionHeaderStyles.sectionHeader}>
			<Text style={SectionHeaderStyles.sectionTitle}>{category}</Text>
			<TouchableOpacity onPress={handleShowMore}>
				<Text style={SectionHeaderStyles.showMore}>Show more</Text>
			</TouchableOpacity>
		</View>
	);
}

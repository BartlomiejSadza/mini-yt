import { View, FlatList } from "react-native";

import SectionStyles from "./SectionStyles";
import SectionHeader from "./SectionHeader/SectionHeader";
import SectionVideoCard from "./SectionVideoCard/SectionVideoCard";

interface SectionProps {
	section: {
		id: string;
		category: string;
		videos: {
			id: string;
			image: string;
			title: string;
			description: string;
			date: string;
		}[];
	};
}

export default function Section({ section }: SectionProps) {
	return (
		<View key={section.id} style={SectionStyles.section}>
			<SectionHeader category={section.category} />
			<FlatList
				data={section.videos}
				keyExtractor={(item) => item.id}
				horizontal
				renderItem={({ item }) => <SectionVideoCard item={item} />}
			/>
		</View>
	);
}

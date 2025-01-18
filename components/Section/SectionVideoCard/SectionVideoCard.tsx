import { Text, View, Image } from "react-native";
import SectionVideoCardStyles from "./SectionVideoCardStyles";

type VideoCardProps = {
	item: {
		image: string;
		title: string;
		description?: string;
		date: string;
	};
};

export default function SectionVideoCard({ item }: VideoCardProps) {
	return (
		<View style={SectionVideoCardStyles.card}>
			<Image
				source={{ uri: item.image }}
				style={SectionVideoCardStyles.thumbnail}
			/>
			<Text style={SectionVideoCardStyles.cardTitle}>{item.title}</Text>
			<Text style={SectionVideoCardStyles.cardDate}>{item.date}</Text>
		</View>
	);
}

// TODO: Enable click on video card to navigate to video details screen

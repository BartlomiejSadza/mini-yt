import { Text, View, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import SectionVideoCardStyles from "./SectionVideoCardStyles";

type VideoCardProps = {
	item: {
		id: string;
		image: string;
		title: string;
		channel?: string;
		description?: string;
		date: string;
	};
};

export default function SectionVideoCard({ item }: VideoCardProps) {
	return (
		<TouchableOpacity
			onPress={() => router.push(`/vids/${item.id}`)}
			style={SectionVideoCardStyles.card}>
			<Image
				source={{ uri: item.image }}
				style={SectionVideoCardStyles.thumbnail}
			/>
			{item.channel && (
				<Text style={SectionVideoCardStyles.cardChannel}>{item.channel}</Text>
			)}
			<Text style={SectionVideoCardStyles.cardTitle}>{item.title}</Text>
			<Text style={SectionVideoCardStyles.cardDate}>{item.date}</Text>
		</TouchableOpacity>
	);
}

// TODO: Enable click on video card to navigate to video details screen

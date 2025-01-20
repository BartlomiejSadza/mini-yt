import { Text, Image, TouchableOpacity } from "react-native";
import { router, usePathname } from "expo-router";
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
	const pathname = usePathname();
	return (
		<TouchableOpacity
			onPress={() => router.push(`/vids/${item.id}`)}
			style={
				pathname === "/" ?
					SectionVideoCardStyles.card_home
				:	SectionVideoCardStyles.card_search
			}>
			<Image
				source={{ uri: item.image }}
				style={
					pathname === "/" ?
						SectionVideoCardStyles.thumbnailHome
					:	SectionVideoCardStyles.thumbnailSearch
				}
			/>
			{item.channel && (
				<Text style={SectionVideoCardStyles.cardChannel}>{item.channel}</Text>
			)}
			<Text style={SectionVideoCardStyles.cardTitle}>{item.title}</Text>
			<Text style={SectionVideoCardStyles.cardDate}>{item.date}</Text>
		</TouchableOpacity>
	);
}

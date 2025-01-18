import { Text, View, FlatList, Image } from "react-native";
import React from "react";
import VideoCardStyles from "./SectionStyles";
import SectionHeader from "./SectionHeader/SectionHeader";

interface VideoCardProps {
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

export default function VideoCard({ section }: VideoCardProps) {
	return (
		<View key={section.id} style={VideoCardStyles.section}>
			<SectionHeader category={section.category} />
			<FlatList
				data={section.videos}
				keyExtractor={(item) => item.id}
				horizontal
				renderItem={({ item }) => (
					<View style={VideoCardStyles.card}>
						<Image
							source={{ uri: item.image }}
							style={VideoCardStyles.thumbnail}
						/>
						<Text style={VideoCardStyles.cardTitle}>{item.title}</Text>
						<Text style={VideoCardStyles.cardDate}>{item.date}</Text>
					</View>
				)}
			/>
		</View>
	);
}

// TODO component "Section"

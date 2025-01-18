import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import VideoCardStyles from "./VideoCardStyles";

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
			<View style={VideoCardStyles.sectionHeader}>
				<Text style={VideoCardStyles.sectionTitle}>{section.category}</Text>
				<TouchableOpacity>
					<Text style={VideoCardStyles.showMore}>Show more</Text>
				</TouchableOpacity>
			</View>
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

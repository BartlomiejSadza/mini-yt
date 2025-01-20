import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchScreenStyles from "./SearchScreenStyle";
import { useVideo } from "contexts/VideoContext";
import SearchBar from "components/SearchBar/SearchBar";
import SectionVideoCard from "components/Section/SectionVideoCard/SectionVideoCard";
import SortModal from "modals/SortModal";

interface VideoItem {
	id: {
		videoId: string;
	};
	snippet: {
		title: string;
		description: string;
		thumbnails: {
			medium: {
				url: string;
			};
		};
		publishedAt: string;
		channelTitle: string;
	};
}

export default function SearchScreen() {
	const { videos, searchQuery } = useVideo();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedSort, setSelectedSort] = useState("Most popular");

	const renderItem = ({ item }: { item: VideoItem }) => (
		<TouchableOpacity style={SearchScreenStyles.cardContainer}>
			<SectionVideoCard
				item={{
					id: item.id.videoId,
					image: item.snippet.thumbnails.medium.url,
					title: item.snippet.title,
					channel: item.snippet.channelTitle,
					date: new Date(item.snippet.publishedAt).toLocaleDateString(),
				}}
			/>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView edges={[]} style={SearchScreenStyles.container}>
			<View style={SearchScreenStyles.topBar}>
				<SearchBar />
			</View>
			<View style={SearchScreenStyles.resultsInfo}>
				<Text style={SearchScreenStyles.resultsText}>
					{videos?.length} results found for:{" "}
					<Text style={SearchScreenStyles.searchTerm}>{searchQuery}</Text>
				</Text>
				<Pressable onPress={() => setIsModalVisible(true)}>
					<Text style={SearchScreenStyles.sortByText}>
						Sort by: <Text style={SearchScreenStyles.bold}>{selectedSort}</Text>
					</Text>
				</Pressable>
			</View>

			<FlatList
				data={videos}
				keyExtractor={(item) => item.id.videoId}
				renderItem={renderItem}
				style={SearchScreenStyles.list}
			/>

			<SortModal
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				selectedOption={selectedSort}
				setSelectedOption={setSelectedSort}
			/>
		</SafeAreaView>
	);
}

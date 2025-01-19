import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVideo } from "contexts/VideoContext";
import SearchBar from "components/SearchBar/SearchBar";
import SectionVideoCard from "components/Section/SectionVideoCard/SectionVideoCard";
import SearchScreenStyles from "./SearchScreenStyle";

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
	const { videos, loading, searchQuery } = useVideo();

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
					{videos.length} results found for:{" "}
					<Text style={SearchScreenStyles.searchTerm}>"{searchQuery}"</Text>
				</Text>
				<Text style={SearchScreenStyles.sortByText}>
					Sort by: <Text style={SearchScreenStyles.bold}>Most popular</Text>
				</Text>
			</View>

			<FlatList
				data={videos}
				keyExtractor={(item) => item.id.videoId}
				renderItem={renderItem}
				style={SearchScreenStyles.list}
			/>
		</SafeAreaView>
	);
}

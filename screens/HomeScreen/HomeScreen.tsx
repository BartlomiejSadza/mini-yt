import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useQueries } from "@tanstack/react-query";
import HomeStyles from "./HomeScreenStyle";
import { fetchCategoryVideos } from "data/fetchCategoryVideos";

import Section from "components/Section/Section";
import SearchBar from "components/SearchBar/SearchBar";
import SettingsIcon from "components/SearchBar/SettingsIcon";

const App = () => {
	const categories = ["React Native", "React", "TypeScript", "JavaScript"];

	const queries = useQueries({
		queries: categories.map((category) => ({
			queryKey: ["category", category],
			queryFn: () => fetchCategoryVideos(category),
			staleTime: 1000 * 60 * 5,
		})),
	});

	const isLoading = queries.some((query) => query.isLoading);

	const sections = queries.map((query, index) => ({
		id: String(index + 1),
		category: categories[index],
		videos:
			query.data?.map((item) => ({
				id: item.id.videoId,
				title: item.snippet.title,
				description: item.snippet.description,
				date: new Date(item.snippet.publishedAt).toLocaleDateString(),
				image: item.snippet.thumbnails.medium.url,
			})) || [],
	}));

	return (
		<SafeAreaView style={HomeStyles.container} edges={["left", "right"]}>
			<View style={HomeStyles.topBar}>
				<SearchBar />
				<Pressable onPress={() => router.push("/settings")}>
					<SettingsIcon />
				</Pressable>
			</View>
			<ScrollView>
				{sections.map((section) => (
					<Section key={section.id} section={section} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

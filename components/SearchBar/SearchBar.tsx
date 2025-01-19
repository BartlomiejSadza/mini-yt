import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useRef } from "react";
import Colors from "styles/Colors";
import { useVideo } from "contexts/VideoContext";
import SearchBarStyles from "./SearchBarStyles";

export default function SearchBar() {
	const { searchQuery, setSearchQuery, searchVideos } = useVideo();
	const searchTimeout = useRef<NodeJS.Timeout>();

	const handleSearch = useCallback(
		(text: string) => {
			setSearchQuery(text);

			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}

			searchTimeout.current = setTimeout(async () => {
				if (text.length > 2) {
					await searchVideos(text);
				}
			}, 500);
		},
		[searchVideos, setSearchQuery]
	);

	useEffect(() => {
		return () => {
			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}
		};
	}, []);

	return (
		<TextInput
			style={SearchBarStyles.searchBar}
			placeholder=' 🔎 Search videos'
			keyboardType='default'
			placeholderTextColor={Colors.primary}
			value={searchQuery}
			onChangeText={handleSearch}
			clearButtonMode='while-editing'
		/>
	);
}

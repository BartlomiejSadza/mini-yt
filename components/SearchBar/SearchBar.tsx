import { TextInput } from "react-native";
import { useCallback, useEffect, useRef } from "react";
import { router } from "expo-router";
import SearchBarStyles from "./SearchBarStyles";
import { useVideo } from "contexts/VideoContext";
import Colors from "styles/Colors";

export default function SearchBar() {
	const { searchQuery, setSearchQuery, searchVideos } = useVideo();
	const searchTimeout = useRef<NodeJS.Timeout>();
	const inputRef = useRef<TextInput>(null);

	const handleSearch = useCallback(
		(text: string) => {
			setSearchQuery(text);

			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}

			searchTimeout.current = setTimeout(async () => {
				if (text.length > 2) {
					await searchVideos(text);
					router.navigate("/search");
				}
			}, 800);
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
			ref={inputRef}
			style={SearchBarStyles.searchBar}
			placeholder=' 🔎 Search videos'
			keyboardType='default'
			placeholderTextColor={Colors.primary}
			value={searchQuery}
			onChangeText={handleSearch}
			onBlur={() => inputRef.current?.blur()}
			clearButtonMode='while-editing'
		/>
	);
}

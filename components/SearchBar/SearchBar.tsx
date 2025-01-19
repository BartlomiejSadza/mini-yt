import {
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { useCallback, useEffect, useRef } from "react";
import Colors from "styles/Colors";
import { router } from "expo-router";
import { useVideo } from "contexts/VideoContext";
import SearchBarStyles from "./SearchBarStyles";

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
				}
			}, 500);
			router.navigate("/search");
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

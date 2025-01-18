import { View, Image, TextInput, TouchableOpacity } from "react-native";
import Colors from "styles/Colors";

import SearchBarStyles from "./SearchBarStyles";

export default function SearchBar() {
	return (
		<View style={SearchBarStyles.header}>
			<TextInput
				style={SearchBarStyles.searchBar}
				placeholder='Search videos'
				placeholderTextColor={Colors.primary}
			/>
			<TouchableOpacity style={SearchBarStyles.settingsIcon}>
				<Image
					source={require("assets/images/settingsIcon.png")}
					style={SearchBarStyles.settingsIcon}
					resizeMode='cover'
				/>
			</TouchableOpacity>
		</View>
	);
}

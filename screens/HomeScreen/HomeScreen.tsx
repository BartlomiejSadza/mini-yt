import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import HomeStyles from "./HomeScreenStyle";
import data from "./data";

import VideoCard from "components/Section/Section";

const App = () => {
	return (
		<View style={HomeStyles.container}>
			<View style={HomeStyles.header}>
				<TextInput style={HomeStyles.searchBar} placeholder='Search videos' />
				<TouchableOpacity style={HomeStyles.settingsIcon}>
					<Text>⚙️</Text>
				</TouchableOpacity>
			</View>
			<ScrollView>
				{data.map((section) => (
					<VideoCard key={section.id} section={section} />
				))}
			</ScrollView>
			<View style={HomeStyles.bottomNavigation}>
				<TouchableOpacity>
					<Text style={HomeStyles.navItem}>🏠 Home</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={HomeStyles.navItem}>🔍 Search</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default App;

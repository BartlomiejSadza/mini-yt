import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStyles from "./HomeScreenStyle";
import data from "./data";

import Section from "components/Section/Section";
import SearchBar from "components/SearchBar/SearchBar";

const App = () => {
	return (
		<SafeAreaView style={HomeStyles.container}>
				<SearchBar />
			<ScrollView>
				{data.map((section) => (
					<Section key={section.id} section={section} />
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
		</SafeAreaView>
	);
};

export default App;

import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStyles from "./HomeScreenStyle";
import data from "./data";

import Section from "components/Section/Section";
import SearchBar from "components/SearchBar/SearchBar";
import SettingsIcon from "components/SearchBar/SettingsIcon";

const App = () => {
	return (
		<SafeAreaView style={HomeStyles.container} edges={["left", "right"]}>
			<View style={HomeStyles.topBar}>
				<SearchBar />
				<SettingsIcon />
			</View>
			<ScrollView>
				{data.map((section) => (
					<Section key={section.id} section={section} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

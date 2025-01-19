import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStyles from "./HomeScreenStyle";
import data from "./data";

import Section from "components/Section/Section";
import SearchBar from "components/SearchBar/SearchBar";

const App = () => {
	return (
		<SafeAreaView style={HomeStyles.container} edges={["left", "right"]}>
			<SearchBar />
			<ScrollView>
				{data.map((section) => (
					<Section key={section.id} section={section} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStyles from "./HomeScreenStyle";
import data from "./data";

import Section from "components/Section/Section";
import SearchBar from "components/SearchBar/SearchBar";
import BottomNav from "components/BottomNav/BottomNav";

const App = () => {
	return (
		<SafeAreaView style={HomeStyles.container} edges={["top", "left", "right"]}>
			<SearchBar />
			<ScrollView>
				{data.map((section) => (
					<Section key={section.id} section={section} />
				))}
			</ScrollView>
			<BottomNav />
		</SafeAreaView>
	);
};

export default App;

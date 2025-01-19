import { SafeAreaView } from "react-native";
import VideoPlayer from "./VideoPlayer";
import Description from "./Description/Description";

import DetailScreenStyle from "./DetailScreenStyle";

export default function DetailScreen() {
	return (
		<SafeAreaView style={DetailScreenStyle.contentContainer}>
			<VideoPlayer />
			<Description />
		</SafeAreaView>
	);
}

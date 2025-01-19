import React, { useRef } from "react";
import {
	StyleSheet,
	SafeAreaView,
	useWindowDimensions,
	StatusBar,
} from "react-native";
import Video, { VideoRef } from "react-native-video";

import Colors from "styles/Colors";

export default function VideoPlayer() {
	const videoRef = useRef<VideoRef>(null);

	const { width, height } = useWindowDimensions();
	const isLandscape = width > height;

	const videoStyle =
		isLandscape ?
			{ width, height } // fullscreen
		:	{ width, height: (width * 9) / 16 }; // 16:9 but in portrait

	return (
		<SafeAreaView>
			<StatusBar hidden={isLandscape} />

			<Video
				ref={videoRef}
				source={require("assets/recruitment_task_assets/video/broadchurch.mp4")}
				style={videoStyle}
				controls
				resizeMode='contain'
				onError={(e) => console.log("Video error:", e)}
			/>
		</SafeAreaView>
	);
}

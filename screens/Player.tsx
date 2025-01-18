import Video, { VideoRef } from "react-native-video";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

const VideoPlayer = () => {
	const videoRef = useRef<VideoRef>(null);
	const background = require("assets/recruitment_task_assets/video/broadchurch.mp4");

	return (
		<Video
			// Can be a URL or a local file.
			source={background}
			// Store reference
			ref={videoRef}
			// Callback when remote video is buffering
			// onBuffer={onBuffer}
			// Callback when video cannot be loaded
			// onError={onError}
			style={styles.backgroundVideo}
		/>
	);
};

// Later on in your styles..
var styles = StyleSheet.create({
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});

export default VideoPlayer;
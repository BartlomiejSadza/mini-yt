import { Stack } from "expo-router";
import { VideoProvider } from "../contexts/VideoContext";

export default function RootLayout() {
	return (
		<VideoProvider>
			<Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
				<Stack.Screen name='index' />
				<Stack.Screen name='(tabs)' />
			</Stack>
		</VideoProvider>
	);
}

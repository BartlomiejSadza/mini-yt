import { Stack } from "expo-router";
import { VideoProvider } from "../contexts/VideoContext";

export default function RootLayout() {
	return (
		<VideoProvider>
			<Stack screenOptions={{ headerShown: true }} initialRouteName='index'>
				<Stack.Screen name='index' />
				<Stack.Screen name='(tabs)' />
				<Stack.Screen name='settings' />
				<Stack.Screen name='vids/[id]' />
			</Stack>
		</VideoProvider>
	);
}

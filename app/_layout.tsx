import { Stack } from "expo-router";
import { VideoProvider } from "../contexts/VideoContext";
import Colors from "styles/Colors";

export default function RootLayout() {
	return (
		<VideoProvider>
			<Stack screenOptions={{ headerShown: true }} initialRouteName='index'>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen
					name='(tabs)'
					options={{ headerShown: false, headerTitle: "back" }}
				/>
				<Stack.Screen name='settings' />
				<Stack.Screen
					name='vids/[id]'
					options={{
						headerTitle: "",
						headerStyle: { backgroundColor: Colors.black },
						headerTintColor: Colors.white,
					}}
				/>
			</Stack>
		</VideoProvider>
	);
}

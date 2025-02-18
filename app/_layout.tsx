import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VideoProvider } from "../contexts/VideoContext";
import Colors from "styles/Colors";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minut
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	);
}

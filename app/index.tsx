import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Stack.Group screenOptions={{ headerLargeTitle: true }}>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ title: "Home" }}
			/>
			<Stack.Screen
				name='Search'
				component={SearchScreen}
				options={{ title: "Search Videos" }}
			/>
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{ title: "Video Details" }}
			/>
		</Stack.Group>
	);
}

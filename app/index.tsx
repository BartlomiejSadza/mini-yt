import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} />
		</Stack.Navigator>
	);
}

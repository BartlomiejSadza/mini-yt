import { Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native";
import BottomNavStyles from "./BottomNavStyles";

export default function BottomNav() {
	return (
		<SafeAreaView style={BottomNavStyles.bottomNavigation}>
			<TouchableOpacity>

				<Text style={BottomNavStyles.navItem}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={BottomNavStyles.navItem}>Search</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

import { Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import BottomNavStyles from "./BottomNavStyles";

export default function BottomNav() {
	return (
		<SafeAreaView style={BottomNavStyles.bottomNavigation}>
			<TouchableOpacity style={BottomNavStyles.navItem}>
				<Image
					source={require("assets/images/home.png")}
					style={BottomNavStyles.navIcon}
					resizeMode='cover'
				/>
				<Text>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity style={BottomNavStyles.navItem}>
				<Image
					source={require("assets/images/search.png")}
					style={BottomNavStyles.navIcon}
					resizeMode='cover'
				/>
				<Text>Search</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

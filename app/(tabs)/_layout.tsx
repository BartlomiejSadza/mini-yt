import { Tabs } from "expo-router";
import { Image } from "react-native";
import Colors from "styles/Colors";
import { Fonts, FontSizes } from "styles/Fonts";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				tabBarStyle: {
					backgroundColor: Colors.primary,
					padding: 10,
				},
				tabBarLabelStyle: {
					fontFamily: Fonts.Regular,
					fontSize: FontSizes.md,
					width: "auto",
					flexShrink: 0,
				},
				tabBarActiveTintColor: Colors.white,
				tabBarInactiveTintColor: Colors.accent,
			}}>
			<Tabs.Screen
				name='index'
				options={{
					headerTitle: "Home",
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Image
							source={require("assets/images/home.png")}
							style={{
								width: 24,
								height: 24,
								tintColor: color,
							}}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					headerTitle: "Search",
					title: "Search",
					tabBarIcon: ({ color }) => (
						<Image
							source={require("assets/images/search.png")}
							style={{
								width: 24,
								height: 24,
								tintColor: color,
							}}
						/>
					),
				}}
			/>
		</Tabs>
	);
}

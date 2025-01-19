import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<>
			<Tabs screenOptions={{ headerShown: true }}>
				<Tabs.Screen
					name='index'
					options={{ headerTitle: "Home", title: "Home" }}
				/>
				<Tabs.Screen
					name='search'
					options={{ headerTitle: "Search", title: "Search" }}
				/>
			</Tabs>
		</>
	);
}

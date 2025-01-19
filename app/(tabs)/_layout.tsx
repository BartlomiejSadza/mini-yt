import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<>
			<Tabs screenOptions={{ headerShown: true }}>
				<Tabs.Screen name='index' />
				<Tabs.Screen name='search' />
			</Tabs>
		</>
	);
}
import { router } from "expo-router";
import LoginScreen from "screens/LoginScreen/LoginScreen";

export default function login() {
	return <LoginScreen onPressFunc={() => router.push("/(tabs)")} />;
}

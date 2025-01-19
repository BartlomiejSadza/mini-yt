import { router } from "expo-router";
import LoginScreen from "screens/LoginScreen/LoginScreen";

export default function Login() {
	return <LoginScreen onPressFunc={() => router.replace("/(tabs)")} />;
}

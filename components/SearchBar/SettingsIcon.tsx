import { TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import SearchBarStyles from "./SearchBarStyles";

export default function SettingsIcon() {
	return (
		<TouchableOpacity
			style={SearchBarStyles.settingsIcon}
			onPress={() => router.push("/settings")}> 
			<Image
				source={require("assets/images/settingsIcon.png")}
				style={SearchBarStyles.settingsIcon}
				resizeMode='cover'
			/>
		</TouchableOpacity>
	);
}

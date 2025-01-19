import { TouchableOpacity, Image } from "react-native";
import SearchBarStyles from "./SearchBarStyles";

export default function SettingsIcon() {
	return (
		<TouchableOpacity
			style={SearchBarStyles.settingsIcon}
			onPress={() => console.log("Settings icon pressed")}>
			{/* TODO: OnPress settings screen */}
			<Image
				source={require("assets/images/settingsIcon.png")}
				style={SearchBarStyles.settingsIcon}
				resizeMode='cover'
			/>
		</TouchableOpacity>
	);
}

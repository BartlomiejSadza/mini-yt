import { Text, Pressable } from "react-native";
import buttonStyles from "./ButtonStyles";

type ButtonProps = {
	title: string;
	onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
	return (
		<Pressable
			style={({ pressed }) =>
				!pressed ? buttonStyles.container : buttonStyles.loginButtonPressed
			}
			onPress={onPress}>
			<Text style={buttonStyles.loginButtonText}>{title}</Text>
		</Pressable>
	);
}

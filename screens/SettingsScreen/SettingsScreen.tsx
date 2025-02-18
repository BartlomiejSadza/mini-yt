import React, { useState } from "react";
import { View, Text, Switch, Image } from "react-native";
import settingsStyles from "./SettingsScreenStyles";
import { VideoHeader } from "screens/DetailScreen/Description/descriptionComponents";
import Colors from "styles/Colors";

export default function SettingsScreen() {
	const [isReminderEnabled, setIsReminderEnabled] = useState(false);

	const toggleSwitch = () => {
		setIsReminderEnabled((previousState) => !previousState);
		alert("Reminder is " + (isReminderEnabled ? "disabled" : "enabled"));
	};

	return (
		<View style={settingsStyles.container}>
			<View style={settingsStyles.profileContainer}>
				<VideoHeader channelTitle='Joe Doe' />
			</View>

			<View style={settingsStyles.section}>
				<View style={settingsStyles.learningRow}>
					<Image
						source={require("assets/images/bell.png")}
						style={settingsStyles.learningImage}
					/>
					<Text style={settingsStyles.sectionTitle}>Learning reminders</Text>
				</View>
				<View style={settingsStyles.reminderRow}>
					<View style={settingsStyles.reminderRow}>
						<Text style={settingsStyles.reminderText}>Repeat everyday at:</Text>
						<View style={settingsStyles.time}>
							<Image
								source={require("assets/images/clock.png")}
								style={settingsStyles.timeImage}
							/>
							<Text style={settingsStyles.timeText}>12:00</Text>
						</View>
					</View>
					<Switch
						trackColor={{ false: Colors.inactiveTab, true: Colors.accent }}
						thumbColor={isReminderEnabled ? Colors.white : Colors.accent}
						onValueChange={toggleSwitch}
						value={isReminderEnabled}
					/>
				</View>
				<Text style={settingsStyles.description}>
					You will receive friendly reminder to remember to study
				</Text>
			</View>
		</View>
	);
}

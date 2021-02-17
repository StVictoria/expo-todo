import React from "react";
import { View, Text } from "react-native";

import settingsStyles from "./settingsStyles";

export default function SettingsScreen() {
  return (
    <View style={settingsStyles.container}>
      <Text>Settings</Text>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

import settingsStyles from "./settingsStyles";
import Title from "../common/Title";

export default function SettingsScreen() {
  return (
    <View>
      <Title title="Настройки" />
      <View style={settingsStyles.container} />
    </View>
  );
}

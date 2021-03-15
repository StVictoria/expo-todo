import React from "react";
import { View, Text } from "react-native";

import settingsStyles from "./settingsStyles";
import Title from "../common/Title";

export default function SettingsScreen() {
  return (
    <View style={settingsStyles.container}>
      <Title title="Настройки" />
    </View>
  );
}

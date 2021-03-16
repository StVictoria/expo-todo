import React from "react";
import { View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import settingsStyles from "./settingsStyles";
import { black, green_dark } from "../styles/variables";
import Title from "../common/Title";

const settingItems = [
  {
    id: 1,
    title: "Помощь по приложению",
    icon: "help-circle-outline",
    color: black,
    link: "help",
  },
  {
    id: 2,
    title: "Выход",
    icon: "md-exit-outline",
    color: black,
    link: "exit",
  },
];

export default function SettingsScreen() {
  const renderSettingItems = () =>
    settingItems.map((item) => (
      <View style={settingsStyles.item}>
        <View style={settingsStyles.itemTitle}>
          <Ionicons
            name={item.icon}
            size={30}
            color={item.color}
            style={settingsStyles.itemIcon}
          />
          <Text style={settingsStyles.text}>{item.title}</Text>
        </View>

        <Ionicons
          name="chevron-down"
          size={22}
          color={item.color}
          style={settingsStyles.expandIcon}
        />
      </View>
    ));

  return (
    <View>
      <Title title="Настройки" />
      <ScrollView style={settingsStyles.container}>
        {renderSettingItems()}
      </ScrollView>
    </View>
  );
}

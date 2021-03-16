import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import settingsStyles from "./settingsStyles";
import { black } from "../styles/variables";
import Title from "../common/Title";

const settingItems = [
  {
    id: 1,
    title: "Помощь по приложению",
    icon: "help-circle-outline",
    color: black,
    link: "help",
    info: [
      {
        id: 11,
        infoTitle: "Скоро появится возможность редактирования заданий!",
      },
      {
        id: 12,
        infoTitle:
          "При попытке отметить как сделанное появляется окно уверен/отмена.",
      },
      {
        id: 13,
        infoTitle:
          "Когда юзер уходит в минус, высвечивается подсказка, что у него долг.",
      },
      {
        id: 14,
        infoTitle:
          "Плейсхолдер у календаря такого же цвета, как и в остальных полях.",
      },
      {
        id: 15,
        infoTitle:
          "Есть окно отзыва на действия (например, добавил задание и в ответ окно с уведомлением, что оно добавлено).",
      },
    ],
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
  const [isOpen, setToggleOpen] = useState(false);
  const handleExit = () => BackHandler.exitApp();

  const renderSettingItems = () =>
    settingItems.map((item) => (
      <View style={settingsStyles.itemBlock}>
        <TouchableOpacity
          style={settingsStyles.item}
          activeOpacity={0.5}
          onPress={
            item.title === "Выход" ? handleExit : () => setToggleOpen(!isOpen)
          }
        >
          <View style={settingsStyles.itemTitle}>
            <Ionicons
              name={item.icon}
              size={30}
              color={item.color}
              style={settingsStyles.itemIcon}
            />
            <Text style={settingsStyles.text}>{item.title}</Text>
          </View>
          {item.title !== "Выход" ? (
            <Ionicons
              name="chevron-down"
              size={22}
              color={item.color}
              style={settingsStyles.expandIcon}
            />
          ) : null}
        </TouchableOpacity>
        <View
          style={settingsStyles.expandedInfo}
          style={!isOpen && { display: "none" }}
        >
          {item.info &&
            item.info.map((infoItem) => (
              <Text style={settingsStyles.expandedInfoItem}>
                {infoItem.infoTitle}
              </Text>
            ))}
        </View>
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

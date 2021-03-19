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
    title: "Разработчик, алло!",
    icon: "code-working-outline",
    color: black,
    info: [
      {
        id: 11,
        infoTitle: "Возможность редактирования заданий.",
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
        infoTitle: "Создать архив с выполненными заданиями. (low)",
      },
    ],
  },
  {
    id: 2,
    title: "Помощь по приложению",
    icon: "help-circle-outline",
    color: black,
    info: [
      {
        id: 21,
        infoTitle:
          "Чтобы отметить задание как сделанное, нужно отметить его в чекбоксе слева от названия. Средства будут автоматически начислены на счёт.",
      },
      {
        id: 22,
        infoTitle:
          "Что бы удалить созданное задание, зажмите карточку задания и выберите в открывшемся окне 'Удалить'",
      },
    ],
  },
  {
    id: 3,
    title: "Выход",
    icon: "md-exit-outline",
    color: black,
  },
];

export default function SettingsScreen() {
  const [id, setId] = useState(null);
  const handleExit = () => BackHandler.exitApp();
  const renderSettingItems = () =>
    settingItems.map((item) => (
      <View key={item.id} style={settingsStyles.itemBlock}>
        <TouchableOpacity
          style={settingsStyles.item}
          activeOpacity={0.5}
          onPress={
            item.title === "Выход"
              ? handleExit
              : id === null
              ? () => setId(item.id)
              : () => setId(null)
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
              name={id !== item.id ? "chevron-down" : "chevron-up"}
              size={22}
              color={item.color}
              style={settingsStyles.expandIcon}
            />
          ) : null}
        </TouchableOpacity>
        {id === item.id && (
          <View style={settingsStyles.expandedInfo}>
            {item.info &&
              item.info.map((infoItem) => (
                <Text key={infoItem.id} style={settingsStyles.expandedInfoItem}>
                  {infoItem.infoTitle}
                </Text>
              ))}
          </View>
        )}
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

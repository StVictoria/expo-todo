import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const menuTiles = [
  { id: 1, title: "Новая задача", color: "orange" },
  { id: 2, title: "Мои задачи", color: "purple" },
  { id: 3, title: "Мой счёт", color: "lime" },
  { id: 4, title: "Настройки", color: "aqua" },
];

export default function Menu() {
  const renderMenuTiles = (tiles) =>
    tiles.map((tile) => (
      <View key={tile.id} style={styles.tile}>
        <Text style={styles.tileTitle}>{tile.title}</Text>
      </View>
    ));
  return (
    <ScrollView contentContainerStyle={styles.menu}>
      {renderMenuTiles(menuTiles)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    paddingBottom: 90,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 170,
    width: "100%",
    backgroundColor: "#fffed2",
  },
  tileTitle: {
    fontSize: 30,
    color: "black",
  },
});

import React from "react";
import { TouchableHighlight, ScrollView, Text, StyleSheet } from "react-native";

const menuTiles = [
  { id: 1, title: "Новая задача", color: "orange", link: "AddTodo" },
  { id: 2, title: "Мои задачи", color: "purple", link: "MyTodos" },
  { id: 3, title: "Мой счёт", color: "lime", link: "Account" },
  { id: 4, title: "Настройки", color: "aqua", link: "Settings" },
];

export default function Menu({ navigation }) {
  const renderMenuTiles = (tiles) =>
    tiles.map((tile) => (
      <TouchableHighlight
        key={tile.id}
        style={styles.tile}
        onPress={() => navigation.navigate(tile.link)}
      >
        <Text style={styles.tileTitle}>{tile.title}</Text>
      </TouchableHighlight>
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

import React from "react";
import {
  TouchableHighlight,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import plus from "../../assets/plus.png";
import clipboard from "../../assets/clipboard.png";
import bankMenu from "../../assets/bankMenu.png";
import settings from "../../assets/settings.png";

const menuTiles = [
  { id: 1, title: "Новая задача", img: plus, color: "orange", link: "AddTodo" },
  {
    id: 2,
    title: "Мои задачи",
    img: clipboard,
    color: "purple",
    link: "MyTodos",
  },
  { id: 3, title: "Мой счёт", img: bankMenu, color: "lime", link: "Account" },
  { id: 4, title: "Настройки", img: settings, color: "aqua", link: "Settings" },
];

export default function Menu({ navigation }) {
  const renderMenuTiles = (tiles) =>
    tiles.map((tile) => (
      <TouchableOpacity
        key={tile.id}
        style={styles.tile}
        onPress={() => navigation.navigate(tile.link)}
      >
        <Image source={tile.img} style={styles.tileImg} />
        <Text style={styles.tileTitle}>{tile.title}</Text>
      </TouchableOpacity>
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
  },
  tile: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 170,
    width: "100%",
  },
  tileImg: {
    position: "absolute",
    top: "50%",
    marginTop: -30,
    left: "50%",
    marginLeft: -30,
    width: 60,
    height: 60,
    opacity: 0.1,
  },
  tileTitle: {
    fontSize: 30,
    color: "black",
  },
});

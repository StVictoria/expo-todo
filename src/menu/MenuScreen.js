import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";

import menuStyles from "./menuStyles";
import plus from "../../assets/plus.png";
import clipboard from "../../assets/clipboard.png";
import bankMenu from "../../assets/bankMenu.png";
import settings from "../../assets/settings.png";
import logout from "../../assets/logout.png";

const menuTiles = [
  { id: 1, title: "Новая задача", img: plus, color: "orange", link: "AddTask" },
  {
    id: 2,
    title: "Мои задачи",
    img: clipboard,
    color: "purple",
    link: "MyTasks",
  },
  { id: 3, title: "Мой счёт", img: bankMenu, color: "lime", link: "Account" },
  { id: 4, title: "Настройки", img: settings, color: "aqua", link: "Settings" },
  { id: 5, title: "Выход", img: logout, link: "Logout" },
];

export default function MenuScreen({ navigation }) {
  const renderMenuTiles = (tiles) =>
    tiles.map((tile) => (
      <TouchableOpacity
        key={tile.id}
        style={menuStyles.tile}
        onPress={
          tile.link !== "Logout"
            ? () => navigation.navigate(tile.link)
            : () => BackHandler.exitApp()
        }
      >
        <Image source={tile.img} style={menuStyles.tileImg} />
        <Text style={menuStyles.tileTitle}>{tile.title}</Text>
      </TouchableOpacity>
    ));
  return (
    <ScrollView contentContainerStyle={menuStyles.menu}>
      {renderMenuTiles(menuTiles)}
    </ScrollView>
  );
}

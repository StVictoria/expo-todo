import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import navbarStyles from "./navbarStyles";
import menu from "../assets/menu.png";
import bank from "../assets/bank.png";

export default function Navbar({ account }) {
  return (
    <View style={navbarStyles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigator("Account")}>
        <Image source={menu} style={navbarStyles.navButton} />
      </TouchableOpacity>
      <View style={navbarStyles.logoSide}>
        <Text style={navbarStyles.logoText}>To Do To Earn</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigator("Account")}>
        <Text>{account}</Text>
        <Image source={bank} style={navbarStyles.navButton} />
      </TouchableOpacity>
    </View>
  );
}

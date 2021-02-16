import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import menu from "../assets/menu.png";
import bank from "../assets/bank.png";

export default function Navbar({ account }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigator("Account")}>
        <Image source={menu} style={styles.navButton} />
      </TouchableOpacity>
      <View style={styles.logoSide}>
        <Text style={styles.logoText}>To Do To Earn</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigator("Account")}>
        <Text>{account}</Text>
        <Image source={bank} style={styles.navButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0E0034",
    height: 90,
    paddingHorizontal: 20,
  },
  logoSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "46%",
  },
  logoText: {
    fontSize: 18,
    color: "#f2f2f2",
  },
  accountSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountMoney: {
    color: "#f2f2f2",
    marginRight: 10,
  },
  navButton: {
    width: 25,
    height: 25,
  },
});

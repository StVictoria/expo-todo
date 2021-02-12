import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import menu from "../assets/menu.png";
import bank from "../assets/bank.png";

export default function Navbar({ account }) {
  return (
    <View style={styles.navbar}>
      <View style={styles.logoSide}>
        <Image source={menu} style={styles.menuImg} />
        <Text style={styles.logoText}>To Do To Earn</Text>
      </View>
      <View style={styles.accountSide}>
        <Text style={styles.accountMoney}>{account}</Text>
        <Image source={bank} style={styles.menuImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    paddingHorizontal: 25,
    backgroundColor: "#0E0034",
  },
  logoSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "48%",
  },
  menuImg: {
    width: 20,
    height: 20,
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
});

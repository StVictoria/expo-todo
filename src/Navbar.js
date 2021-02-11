import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>To Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

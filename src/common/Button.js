import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

export default function Button({ name, color, values, onClick }) {
  const styles = StyleSheet.create({
    submitButton: {
      alignItems: "center",
      borderRadius: 50,
      backgroundColor: color,
      padding: 15,
    },
    text: {
      color: "#ffffff",
      fontSize: 16,
    },
  });

  return (
    <TouchableHighlight
      title={name}
      underlayColor={color}
      onPress={() => onClick(values)}
      style={styles.submitButton}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableHighlight>
  );
}

import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

export default function Button({ name, color, userValues, onClick }) {
  const styles = StyleSheet.create({
    submitButton: {
      alignItems: "center",
      width: "45%",
      borderRadius: 50,
      backgroundColor: color,
      padding: 15,
      marginTop: 15,
    },
    text: {
      color: "#ffffff",
      fontSize: 16,
    },
  });

  return (
    <TouchableHighlight
      title={name}
      onPress={() => onClick(userValues)}
      style={styles.submitButton}
    >
      <Text style={styles.text}>Добавить</Text>
    </TouchableHighlight>
  );
}

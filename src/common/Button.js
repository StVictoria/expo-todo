import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Button({
  isStartIcon,
  icon,
  name,
  color,
  values,
  onClick,
}) {
  const styles = StyleSheet.create({
    submitButton: {
      flexDirection: icon ? (isStartIcon ? "row" : "row-reverse") : "column",
      alignItems: "center",
      borderRadius: 50,
      backgroundColor: color,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    text: {
      color: "#ffffff",
      fontSize: 16,
      marginLeft: 5,
    },
  });

  return (
    <TouchableOpacity
      title={name}
      underlayColor={color}
      onPress={() => onClick(values)}
      style={styles.submitButton}
    >
      {icon && <Ionicons name={icon} size={24} color="white" />}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

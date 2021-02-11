import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Todo({ todo, onLongPressTodo }) {
  return (
    <TouchableOpacity onLongPress={() => onLongPressTodo(todo.id)}>
      <View>
        <Text style={styles.todo}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 3,
    marginVertical: 10,
    padding: 10,
  },
});

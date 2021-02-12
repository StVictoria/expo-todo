import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Todo({ todo, onTodoDone, onLongPressTodo }) {
  const fieldValue = todo.userFields;
  return (
    <TouchableOpacity
      style={styles.todoButton}
      onLongPress={() => onLongPressTodo(todo.id)}
    >
      <Text onPress={() => onTodoDone(todo.id, fieldValue.amount)}>DONE</Text>
      <Text style={styles.todoTask}>{fieldValue.task}</Text>
      <View>
        <Text style={styles.todoRest}>{fieldValue.amount} </Text>
        <Text style={styles.todoRest}>до {fieldValue.deadline}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 50,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  todoTask: { fontSize: 16 },
  todoRest: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

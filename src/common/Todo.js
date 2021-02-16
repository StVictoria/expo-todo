import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Todo({ todo, onTodoDone, onLongPressTodo }) {
  const fieldValue = todo.userFields;
  return (
    <TouchableOpacity
      style={styles.todoButton}
      onLongPress={() => onLongPressTodo(todo.id)}
    >
      <Text
        style={styles.doneButton}
        onPress={() => onTodoDone(todo.id, fieldValue.amount)}
      >
        DONE
      </Text>
      <Text style={styles.todoTask}>{fieldValue.task}</Text>
      <View style={styles.restInfo}>
        {fieldValue.amount && (
          <Text style={styles.todoRest}>{fieldValue.amount}</Text>
        )}
        {fieldValue.deadline && (
          <Text style={styles.todoRest}>до {fieldValue.deadline}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 50,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  doneButton: { width: "15%" },
  todoTask: { fontSize: 16, width: "60%", textAlign: "center" },
  restInfo: { width: "25%" },
  todoRest: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

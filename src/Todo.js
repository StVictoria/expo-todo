import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function Todo({ todo, onLongPressTodo }) {
  const fieldValue = todo.userFields;
  return (
    <TouchableOpacity onLongPress={() => onLongPressTodo(todo.id)}>
      <View>
        <Text style={styles.todo}>
          {fieldValue.task} {fieldValue.amount} {fieldValue.deadline}{" "}
          {fieldValue.notice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 3,
    marginVertical: 10,
    padding: 10,
  },
});

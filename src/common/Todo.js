import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

import todoStyles from "./todoStyles";

export default function Todo({ todo, onTodoDone, onLongPressTodo }) {
  const fieldValue = todo.userFields;
  return (
    <TouchableOpacity
      style={todoStyles.todoButton}
      onLongPress={() => onLongPressTodo(todo.id)}
    >
      <Text
        style={todoStyles.doneButton}
        onPress={() => onTodoDone(todo.id, fieldValue.amount)}
      >
        DONE
      </Text>
      <Text style={todoStyles.todoTask}>{fieldValue.task}</Text>
      <View style={todoStyles.restInfo}>
        {fieldValue.amount && (
          <Text style={todoStyles.todoRest}>{fieldValue.amount}</Text>
        )}
        {fieldValue.deadline && (
          <Text style={todoStyles.todoRest}>до {fieldValue.deadline}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

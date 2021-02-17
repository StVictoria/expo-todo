import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import taskStyles from "./taskStyles";

export default function Task({ task, onTaskDone, onLongPressTask }) {
  const fieldValue = task.userFields;
  return (
    <TouchableOpacity
      style={taskStyles.taskButton}
      onLongPress={() => onLongPressTask(task.id)}
    >
      <Text
        style={taskStyles.doneButton}
        onPress={() => onTaskDone(task.id, fieldValue.amount)}
      >
        DONE
      </Text>
      <Text style={taskStyles.taskDescription}>{fieldValue.task}</Text>
      <View style={taskStyles.restInfoBlock}>
        {fieldValue.amount && (
          <Text style={taskStyles.restInfoItem}>{fieldValue.amount}</Text>
        )}
        {fieldValue.deadline && (
          <Text style={taskStyles.restInfoItem}>до {fieldValue.deadline}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

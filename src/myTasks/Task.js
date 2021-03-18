import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import taskStyles from "./taskStyles";

export default function Task({
  task,
  onTaskDone,
  onPressTask,
  onLongPressTask,
}) {
  const [isOpen, setToggleOpen] = useState(false);

  const fieldValue = task.userFields;

  return (
    <TouchableOpacity
      style={taskStyles.taskButton}
      activeOpacity={0.9}
      onPress={() => {
        setToggleOpen(!isOpen);
      }}
      onLongPress={() => onLongPressTask(task.id)}
    >
      <View style={taskStyles.mainInfo}>
        <Checkbox
          style={taskStyles.doneButton}
          value={false}
          onValueChange={() => onTaskDone(task.id, fieldValue.amount)}
        />

        <Text style={taskStyles.taskDescription}>{fieldValue.task}</Text>

        <Ionicons
          name={!isOpen ? "chevron-down" : "chevron-up"}
          size={22}
          color="black"
        />
      </View>

      {isOpen ? (
        //вынести в отдельную функцию рендера
        <View style={taskStyles.restInfoBlock}>
          {fieldValue.notice ? (
            <Text style={taskStyles.restInfoItem}>{fieldValue.notice}</Text>
          ) : null}
          {fieldValue.amount ? (
            <Text style={taskStyles.restInfoItem}>
              Награда: {fieldValue.amount}
            </Text>
          ) : null}
          {fieldValue.deadline ? (
            <Text style={taskStyles.restInfoItem}>
              Сделать до {fieldValue.deadline}
            </Text>
          ) : null}
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

import React from "react";
import { View, TextInput, Text, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

import addTaskStyles from "./addTaskStyles";
import Button from "../common/Button";

const fields = [
  {
    id: 1,
    name: "task",
    title: "Что необходимо сделать?",
    placeholder: "Например, прочитать книгу",
  },
  { id: 2, name: "amount", title: "Награда", placeholder: "800" },
  { id: 3, name: "deadline", title: "Дедлайн", placeholder: "20.02.2021" },
  {
    id: 4,
    name: "notice",
    title: "Примечание",
    placeholder: "",
  },
];

export default function AddTaskScreen({
  userValues,
  setUserValues,
  tasks,
  setTasks,
  onSaveItem,
}) {
  const handleSetUserValues = (value, field) => {
    setUserValues((prev) => ({ ...prev, [field.name]: value }));
  };
  const handleAddTask = () => {
    if (
      userValues.task === null ||
      (userValues.task !== null && !userValues.task.trim())
    ) {
      Alert.alert(
        "Задача не должна быть пустой",
        "Напишите что необходимо сделать"
      );
    } else {
      const newTask = { id: Date.now().toString(), userFields: userValues };

      setTasks((prev) => [...prev, newTask]);
      onSaveItem("tasks", [...tasks, newTask]);

      setUserValues({ task: null, amount: null, deadline: null, notice: null });
    }
  };

  const renderTextFields = () =>
    fields.map((field) => (
      <View key={field.id} style={addTaskStyles.fieldContainer}>
        <Text style={addTaskStyles.label}>{field.title}</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          textAlign="center"
          placeholder={field.placeholder}
          value={userValues[field.name]}
          onChange={({ nativeEvent }) =>
            handleSetUserValues(nativeEvent.text, field)
          }
          style={addTaskStyles.textInput}
        />
      </View>
    ));
  return (
    <View style={addTaskStyles.addTaskBlock}>
      {renderTextFields()}
      <Button
        name="Добавить"
        color="#37AC0A"
        userValues={userValues}
        onClick={handleAddTask}
      />
    </View>
  );
}

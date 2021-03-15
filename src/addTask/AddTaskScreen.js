import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import DatePicker from "react-native-datepicker";

import addTaskStyles from "./addTaskStyles";
import Button from "../common/Button";
import Title from "../common/Title";

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
        {field.name !== "deadline" ? (
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
        ) : (
          <DatePicker
            date={userValues.deadline}
            mode="date"
            placeholder="20.01.2030"
            format="DD.MM.YYYY"
            minDate="01.01.2016"
            style={[addTaskStyles.textInput, addTaskStyles.datePicker]}
            customStyles={{
              dateIcon: {
                display: "none",
              },
              dateInput: {
                borderWidth: 0,
                "background-color": "green",
              },
            }}
            onDateChange={(date) => {
              handleSetUserValues(date, field);
            }}
          />
        )}
      </View>
    ));
  return (
    <View>
      <Title title="Добавить задачу" />
      <View style={addTaskStyles.addTaskBlock}>
        {renderTextFields()}
        <Button
          name="Добавить"
          color="#37AC0A"
          userValues={userValues}
          onClick={handleAddTask}
        />
      </View>
    </View>
  );
}

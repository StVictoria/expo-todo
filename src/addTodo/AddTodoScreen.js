import React from "react";
import { View, TextInput, Text, Alert, StyleSheet } from "react-native";

import addTodoStyles from "./addTodoStyles";
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

export default function AddTodo({ userValues, setUserValues, setTodos }) {
  const handleSetUserValues = (value, field) => {
    setUserValues((prev) => ({ ...prev, [field.name]: value }));
  };

  const handleAddTodo = () => {
    if (
      userValues.task === null ||
      (userValues.task !== null && !userValues.task.trim())
    ) {
      Alert.alert(
        "Задача не должна быть пустой",
        "Напишите что необходимо сделать"
      );
    } else {
      const newTodo = { id: Date.now().toString(), userFields: userValues };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setUserValues({ task: null, amount: null, deadline: null, notice: null });
    }
  };

  const renderTextFields = () =>
    fields.map((field) => (
      <View key={field.id} style={addTodoStyles.fieldContainer}>
        <Text style={addTodoStyles.label}>{field.title}</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          textAlign="center"
          placeholder={field.placeholder}
          value={userValues[field.name]}
          onChange={({ nativeEvent }) =>
            handleSetUserValues(nativeEvent.text, field)
          }
          style={addTodoStyles.textInput}
        />
      </View>
    ));
  return (
    <View style={addTodoStyles.addTodoBlock}>
      {renderTextFields()}
      <Button
        name="Добавить"
        color="#37AC0A"
        userValues={userValues}
        onClick={handleAddTodo}
      />
    </View>
  );
}

import React from "react";
import { View, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import { Ionicons } from "@expo/vector-icons";

import addTaskStyles from "./addTaskStyles";
import { black, green_normal } from "../styles/variables";
import Title from "../common/Title";
import Button from "../common/Button";
import { messageWindow } from "../utils/helpers";

const fields = [
  {
    id: 1,
    name: "task",
    title: "Что необходимо сделать?",
    placeholder: "Например, прочитать книгу",
    icon: "rocket-outline",
  },
  {
    id: 2,
    name: "amount",
    title: "Награда",
    placeholder: "800",
    icon: "cash-outline",
  },
  {
    id: 3,
    name: "deadline",
    title: "Дедлайн",
    placeholder: "20.02.2021",
    icon: "calendar-outline",
  },
  {
    id: 4,
    name: "notice",
    title: "Примечание",
    placeholder: "Детали задачи",
    icon: "ellipsis-horizontal-circle",
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
    const task = userValues.task;
    if (task === null || (task !== null && !task.trim())) {
      messageWindow(
        "Задача не должна быть пустой",
        "Напишите что необходимо сделать"
      );
    } else {
      const newTask = { id: Date.now().toString(), userFields: userValues };

      setTasks((prev) => [...prev, newTask]);
      onSaveItem("tasks", [...tasks, newTask]);

      messageWindow(
        "Задача успешно создана!",
        "Можете проверить на вкладке Мои задачи"
      );
      setUserValues({ task: null, amount: null, deadline: null, notice: null });
    }
  };

  const renderTextFields = () =>
    fields.map((field) => (
      <View key={field.id} style={addTaskStyles.fieldContainer}>
        <Ionicons
          name={field.icon}
          style={addTaskStyles.icon}
          size={30}
          color={black}
        />
        {field.name !== "deadline" ? (
          <TextInput
            multiline
            textAlign="center"
            keyboardType={field.name === "amount" ? "number-pad" : "default"}
            contextMenuHidden={false}
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
            format="DD.MM.YY"
            minDate="01.01.2021"
            style={[addTaskStyles.textInput, addTaskStyles.datePicker]}
            customStyles={{
              dateIcon: {
                display: "none",
              },
              dateInput: {
                borderWidth: 0,
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
          isStartIcon
          icon="md-add"
          name="Добавить"
          color={green_normal}
          userValues={userValues}
          onClick={handleAddTask}
        />
      </View>
    </View>
  );
}

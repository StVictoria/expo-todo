import React, { useState, useEffect } from "react";
import { FlatList, Alert, Text } from "react-native";

import myTasksStyles from "./myTasksStyles";
import Task from "./Task";

export default function MyTasksScreen({
  tasks,
  money,
  setTasks,
  setMoney,
  onSaveItem,
}) {
  const handleLongPressTask = (id) => {
    Alert.alert(
      "Удалить задачу?",
      "Задачу нельзя будет вернуть. Средства не начислятся, т.к. задача не выполнена :(",
      [
        { text: "Отмена", onPress: () => {} },
        {
          text: "Удалить",
          onPress: () => {
            setTasks((prev) => prev.filter((task) => task.id !== id));
            onSaveItem("tasks", tasks);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleTaskDone = (id, reward) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    onSaveItem("tasks", tasks);

    setMoney(Number(money) + Number(reward));
    onSaveItem("money", Number(money) + Number(reward));
  };

  const renderMyTasks = (items) => (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      style={myTasksStyles.container}
      renderItem={({ item }) => (
        <Task
          task={item}
          onTaskDone={handleTaskDone}
          onLongPressTask={handleLongPressTask}
        />
      )}
    />
  );

  return tasks ? renderMyTasks(tasks) : <Text>Список пуст</Text>;
}

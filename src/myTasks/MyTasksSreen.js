import React from "react";
import { FlatList, Alert } from "react-native";

import myTasksStyles from "./myTasksStyles";
import Task from "./Task";

export default function MyTasksScreen({ tasks, money, setTasks, setMoney }) {
  const handleLongPressTask = (id) =>
    Alert.alert(
      "Удалить задачу?",
      "Задачу нельзя будет вернуть. Средства не начислятся, т.к. задача не выполнена :(",
      [
        { text: "Отмена", onPress: () => {} },
        {
          text: "Удалить",
          onPress: () =>
            setTasks((prev) => prev.filter((task) => task.id !== id)),
        },
      ],
      { cancelable: true }
    );

  const handleTaskDone = (id, reward) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

    setMoney((prev) => Number(prev) + Number(reward));
  };
  return tasks ? (
    <FlatList
      data={tasks}
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
  ) : (
    <Text>Список пуст</Text>
  );
}

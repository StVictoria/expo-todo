import React from "react";
import { ScrollView, FlatList, Alert, StyleSheet } from "react-native";

import Todo from "../common/Todo";

export default function MyTodos({ todos, money, setTodos, setMoney }) {
  const handleLongPressTodo = (id) =>
    Alert.alert(
      "Удалить задачу?",
      "Задачу нельзя будет вернуть. Средства не начислятся, т.к. задача не выполнена :(",
      [
        { text: "Отмена", onPress: () => {} },
        {
          text: "Удалить",
          onPress: () =>
            setTodos((prev) => prev.filter((todo) => todo.id !== id)),
        },
      ],
      { cancelable: true }
    );

  const handleTodoDone = (id, reward) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    setMoney((prev) => Number(prev) + Number(reward));
  };
  return (
    <ScrollView>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        style={styles.container}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            onTodoDone={handleTodoDone}
            onLongPressTodo={handleLongPressTodo}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

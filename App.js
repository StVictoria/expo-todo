import React, { useState } from "react";
import {
  View,
  ScrollView,
  Alert,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

import Navbar from "./src/Navbar";
import AddTodo from "./src/addTodo/AddTodo";
import Todo from "./src/common/Todo";
import Menu from "./src/menu/Menu";

export default function App() {
  const [money, setMoney] = useState(0);
  const [todos, setTodos] = useState([]);
  const [userValues, setUserValues] = useState({
    task: null,
    amount: null,
    deadline: null,
    notice: null,
  });

  const handleSetUserValues = (value, field) => {
    setUserValues((prev) => ({ ...prev, [field.name]: value }));
  };

  const handleAddTodo = (todo) => {
    if (todo.task === null || (todo.task !== null && !todo.task.trim())) {
      Alert.alert(
        "Задача не должна быть пустой",
        "Напишите что необходимо сделать"
      );
    } else {
      const newTodo = { id: Date.now().toString(), userFields: todo };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setUserValues({ task: null, amount: null, deadline: null, notice: null });
    }
  };

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
    <>
      <StatusBar hidden={true} />
      <View>
        <Navbar account={money} />
        {/* <ScrollView style={styles.wrapper}> */}
        {/* <AddTodo
            onSubmit={handleAddTodo}
            userValues={userValues}
            onSetUserValues={handleSetUserValues}
          /> */}
        {/* <ScrollView>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Todo
                  todo={item}
                  onTodoDone={handleTodoDone}
                  onLongPressTodo={handleLongPressTodo}
                />
              )}
            />
          </ScrollView> */}
        {/* </ScrollView> */}
        <Menu />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  scrollTodos: {},
});

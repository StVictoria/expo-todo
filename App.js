import React, { useState } from "react";
import { StyleSheet, FlatList, Alert, View } from "react-native";

import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [userValue, setUserValue] = useState(null);

  const handleSetUserValue = (value) => setUserValue(value);

  const handleAddTodo = (todo) => {
    if (todo === null || (todo !== null && !todo.trim())) {
      Alert.alert("Todo can't be empty", "Write anything");
    } else {
      const newTodo = { id: Date.now().toString(), title: todo };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setUserValue(null);
    }
  };

  const handleLongPressTodo = (id) =>
    Alert.alert(
      "Delete?",
      "",
      [
        { text: "No", onPress: () => {} },
        {
          text: "Yes",
          onPress: () =>
            setTodos((prev) => prev.filter((todo) => todo.id !== id)),
        },
      ],
      { cancelable: true }
    );

  return (
    <View>
      <Navbar />
      <View style={styles.wrapper}>
        <AddTodo
          onSubmit={handleAddTodo}
          userValue={userValue}
          onSetUserValue={handleSetUserValue}
        />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Todo todo={item} onLongPressTodo={handleLongPressTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  scrollTodos: {},
});

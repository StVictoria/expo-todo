import React, { useState } from "react";
import {
  View,
  ScrollView,
  Alert,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navbar from "./src/Navbar";
import AddTodoScreen from "./src/addTodo/AddTodoScreen";
import Todo from "./src/common/Todo";
import MenuScreen from "./src/menu/MenuScreen";
import AccountScreen from "./src/account/AccountScreen";

const Stack = createStackNavigator();

export default function App() {
  const [money, setMoney] = useState(0);
  const [todos, setTodos] = useState([]);
  const [userValues, setUserValues] = useState({
    task: null,
    amount: null,
    deadline: null,
    notice: null,
  });
  const [availableMoney, setAvailableMoney] = useState(1000);
  const [spentMoney, setSpentMoney] = useState(null);

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

  const handleChangeAccountValues = (value, field) => {
    if (field.name === "spentMoney") {
      setSpentMoney(value);
    } else if (field.name === "availableMoney") {
      setAvailableMoney(value);
    }
  };

  const handleCountAccountValues = (name) => {
    if (name === "spentMoney") {
      setSpentMoney(spentMoney);
      setMoney((prev) => Number(prev) - Number(spentMoney));
      setSpentMoney(null);
    } else if (name === "availableMoney") {
      setAvailableMoney(availableMoney);
    }
  };
  return (
    <>
      <StatusBar hidden={true} />
      <Navbar account={money} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="AddTodo"
            options={{ headerStyle: { height: 0 }, title: "" }}
          >
            {(props) => (
              <AddTodoScreen
                onSubmit={handleAddTodo}
                userValues={userValues}
                onSetUserValues={handleSetUserValues}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Menu"
            options={{ headerStyle: { height: 0 }, title: "" }}
            component={MenuScreen}
          />
          <Stack.Screen
            name="Account"
            options={{ headerStyle: { height: 0 }, title: "" }}
          >
            {(props) => (
              <AccountScreen
                money={money}
                spentMoney={spentMoney}
                availableMoney={availableMoney}
                onChange={handleChangeAccountValues}
                onSubmit={handleCountAccountValues}
              />
            )}
          </Stack.Screen>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  scrollTodos: {},
});

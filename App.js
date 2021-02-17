import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./src/menu/MenuScreen";
import AddTodoScreen from "./src/addTodo/AddTodoScreen";
import AccountScreen from "./src/account/AccountScreen";
import MyTodosScreen from "./src/myTodos/MyTodosSreen";
import SettingsScreen from "./src/settings/SettingsScreen";

const Stack = createStackNavigator();

const commonOptions = (title) => ({ headerTitleAlign: "center", title: title });

export default function App() {
  const [money, setMoney] = useState(0);
  const [todos, setTodos] = useState([]);
  const [availableMoney, setAvailableMoney] = useState(1000);
  const [spentMoney, setSpentMoney] = useState(null);
  const [userValues, setUserValues] = useState({
    task: null,
    amount: null,
    deadline: null,
    notice: null,
  });

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" options={commonOptions("Меню")}>
            {({ navigation }) => (
              <MenuScreen
                navigation={navigation}
                money={money}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="AddTodo"
            options={commonOptions("Добавить задачу")}
          >
            {() => (
              <AddTodoScreen
                userValues={userValues}
                setUserValues={setUserValues}
                setTodos={setTodos}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="MyTodos" options={commonOptions("Мои задачи")}>
            {() => (
              <MyTodosScreen
                todos={todos}
                money={money}
                setTodos={setTodos}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Account" options={commonOptions("Мои средства")}>
            {() => (
              <AccountScreen
                money={money}
                spentMoney={spentMoney}
                availableMoney={availableMoney}
                setSpentMoney={setSpentMoney}
                setAvailableMoney={setAvailableMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Settings"
            options={commonOptions("Настройки")}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  navButton: {
    width: 25,
    height: 25,
  },
});

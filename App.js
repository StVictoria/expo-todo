import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./src/menu/MenuScreen";
import AddTaskScreen from "./src/addTask/AddTaskScreen";
import AccountScreen from "./src/account/AccountScreen";
import MyTasksScreen from "./src/myTasks/MyTasksSreen";
import SettingsScreen from "./src/settings/SettingsScreen";

const Stack = createStackNavigator();

const commonOptions = (title) => ({ headerTitleAlign: "center", title: title });

export default function App() {
  const [money, setMoney] = useState(0);
  const [tasks, setTasks] = useState([]);
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
            name="AddTask"
            options={commonOptions("Добавить задачу")}
          >
            {() => (
              <AddTaskScreen
                userValues={userValues}
                setUserValues={setUserValues}
                setTasks={setTasks}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="MyTasks" options={commonOptions("Мои задачи")}>
            {() => (
              <MyTasksScreen
                tasks={tasks}
                money={money}
                setTasks={setTasks}
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

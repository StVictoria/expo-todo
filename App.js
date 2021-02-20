import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./src/menu/MenuScreen";
import AddTaskScreen from "./src/addTask/AddTaskScreen";
import AccountScreen from "./src/account/AccountScreen";
import MyTasksScreen from "./src/myTasks/MyTasksSreen";
import SettingsScreen from "./src/settings/SettingsScreen";
import { saveItemToStorage, getValueFor } from "./src/secureStorage/utils";

const Stack = createStackNavigator();

const commonOptions = (title) => ({ headerTitleAlign: "center", title: title });

export default function App() {
  // values for storage
  const [tasks, setTasks] = useState([]);
  const [money, setMoney] = useState(0);
  // const [availableMoney, setAvailableMoney] = useState();

  // values for local usage
  const [spentMoney, setSpentMoney] = useState();
  const [userValues, setUserValues] = useState({
    task: null,
    amount: null,
    deadline: null,
    notice: null,
  });

  // ComponentDidMount
  useEffect(() => {
    getValueFor("tasks", setTasks);
    getValueFor("money", setMoney);
    // getValueFor("availableMoney", setAvailableMoney);
  }, []);

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
                tasks={tasks}
                setTasks={setTasks}
                onSaveItem={saveItemToStorage}
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
                onSaveItem={saveItemToStorage}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Account" options={commonOptions("Мои средства")}>
            {() => (
              <AccountScreen
                money={money}
                spentMoney={spentMoney}
                setMoney={setMoney}
                setSpentMoney={setSpentMoney}
                onSaveItem={saveItemToStorage}
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

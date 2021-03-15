import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import MenuScreen from "./src/menu/MenuScreen";
import AddTaskScreen from "./src/addTask/AddTaskScreen";
import AccountScreen from "./src/account/AccountScreen";
import MyTasksScreen from "./src/myTasks/MyTasksSreen";
import SettingsScreen from "./src/settings/SettingsScreen";
import { saveItemToStorage, getValueFor } from "./src/secureStorage/utils";

const Tab = createBottomTabNavigator();

const commonOptions = (title) => ({ headerTitleAlign: "center", title: "" });

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
    deadline: "",
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
        <Tab.Navigator
          showLabel="false"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "MyTasks") {
                iconName = "list";
              } else if (route.name === "AddTask") {
                iconName = "add-circle-outline";
              } else if (route.name === "Account") {
                iconName = "cash-outline";
              } else if (route.name === "Settings") {
                iconName = "ios-settings-outline";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={30}
                  color={color}
                  style={{ marginBottom: -13 }}
                />
              );
            },
          })}
        >
          <Tab.Screen name="MyTasks" options={commonOptions("Мои задачи")}>
            {() => (
              <MyTasksScreen
                tasks={tasks}
                money={money}
                setTasks={setTasks}
                setMoney={setMoney}
                onSaveItem={saveItemToStorage}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="AddTask" options={commonOptions("Добавить задачу")}>
            {() => (
              <AddTaskScreen
                userValues={userValues}
                setUserValues={setUserValues}
                tasks={tasks}
                setTasks={setTasks}
                onSaveItem={saveItemToStorage}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="Account" options={commonOptions("Мои средства")}>
            {() => (
              <AccountScreen
                money={money}
                spentMoney={spentMoney}
                setMoney={setMoney}
                setSpentMoney={setSpentMoney}
                onSaveItem={saveItemToStorage}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Settings"
            options={commonOptions("Настройки")}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

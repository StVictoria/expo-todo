import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  BackHandler,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./src/menu/MenuScreen";
import AddTodoScreen from "./src/addTodo/AddTodoScreen";
import AccountScreen from "./src/account/AccountScreen";
import MyTodosScreen from "./src/myTodos/MyTodosSreen";
import SettingsScreen from "./src/settings/SettingsScreen";
import logout from "./assets/logout.png";

const Stack = createStackNavigator();

const headerOptions = (navigation, screen) => ({
  title: screen,
  headerStyle: {
    height: 80,
  },
  headerTitleContainerStyle: {
    alignItems: "center",
    width: "87%",
  },
  headerRightContainerStyle: { paddingRight: 20 },

  headerRight: () => (
    <TouchableHighlight onPress={() => BackHandler.exitApp()}>
      <Image source={logout} style={styles.navButton} />
    </TouchableHighlight>
  ),
});

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
        <Stack.Navigator initialRouteName="AppContent">
          <Stack.Screen
            name="Menu"
            options={({ navigation }) =>
              headerOptions(navigation, "To Do To Earn")
            }
          >
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
            options={{ headerTitleAlign: "center", title: "Добавить задачу" }}
          >
            {(props) => (
              <AddTodoScreen
                userValues={userValues}
                setUserValues={setUserValues}
                setTodos={setTodos}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Account"
            options={{ headerTitleAlign: "center", title: "Мои средства" }}
          >
            {(props) => (
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
            name="MyTodos"
            options={{ headerTitleAlign: "center", title: "Мои задачи" }}
          >
            {() => (
              <MyTodosScreen
                todos={todos}
                money={money}
                setTodos={setTodos}
                setMoney={setMoney}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            options={{ headerTitleAlign: "center", title: "Настройки" }}
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

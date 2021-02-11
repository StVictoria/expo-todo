import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodo({ userValue, onSetUserValue, onSubmit }) {
  return (
    <View style={styles.addTodoBlock}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Input to do"
        value={userValue}
        onChangeText={(text) => onSetUserValue(text)}
        style={styles.textInput}
      />
      <Button
        title="Add"
        onPress={() => onSubmit(userValue)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#777",
  },
  button: {},
});

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Button from "../common/Button";

const accountFields = [
  {
    id: 1,
    name: "earnedMoney",
    title: "Заработано",
    placeholder: "",
  },
  {
    id: 2,
    name: "spentMoney",
    title: "Потрачено",
    placeholder: "Введите сколько Вы потратили",
  },
  {
    id: 3,
    name: "availableMoney",
    title: "Вам доступно ещё",
    placeholder: "Введите доступную для трат сумму",
  },
];

export default function Account({
  money,
  spentMoney,
  availableMoney,
  onChange,
  onSubmit,
}) {
  const renderAccountFields = () =>
    accountFields.map((field) => (
      <View key={field.id} style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{field.title}</Text>
          {field.name !== "earnedMoney" ? (
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              contextMenuHidden={true}
              textAlign="center"
              placeholder={field.placeholder}
              value={field.name === "spentMoney" ? spentMoney : availableMoney}
              style={styles.textInput}
              onChange={({ nativeEvent }) => onChange(nativeEvent.text, field)}
            />
          ) : (
            <Text style={styles.earnedField}>{money}</Text>
          )}
        </View>
        {field.name === "spentMoney" && (
          <Button
            name="Рассчитать остаток"
            color="#0E0034"
            onClick={() => onSubmit(field.name)}
          />
        )}
        {field.name === "availableMoney" && (
          <Button
            name="Изменить доступную сумму"
            color="#0E0034"
            onClick={() => onSubmit(field.name)}
          />
        )}
      </View>
    ));
  return <View style={styles.addTodoBlock}>{renderAccountFields()}</View>;
}

const styles = StyleSheet.create({
  addTodoBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: { width: "100%", marginBottom: 20 },
  fieldContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    marginBottom: 10,
    textAlign: "center",
  },
  earnedField: { textAlign: "center", fontSize: 18, fontWeight: "bold" },
  textInput: {
    width: "100%",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 50,
  },
});

import React from "react";
import { View, Text, TextInput, Alert } from "react-native";

import accountStyles from "./accountStyles";
import Button from "../common/Button";

const accountFields = [
  {
    id: 1,
    name: "earnedMoney",
    title: "Заработано",
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
  setMoney,
  setSpentMoney,
  setAvailableMoney,
  onSaveItem,
}) {
  const handleCountAccountValues = (name) => {
    if (name === "spentMoney") {
      money === undefined
        ? setMoney(0 - spentMoney)
        : setMoney((prev) => Number(prev) - Number(spentMoney));
      setSpentMoney(null);
      onSaveItem("money", money);
    } else if (name === "availableMoney") {
      setAvailableMoney(availableMoney);
      onSaveItem("availableMoney", availableMoney);
      Alert.alert("Сумма изменена");
    }
  };

  const handleChangeAccountValues = (value, field) => {
    if (field.name === "spentMoney") {
      setSpentMoney(value);
    } else if (field.name === "availableMoney") {
      setAvailableMoney(value);
    }
  };

  const renderAccountFields = () =>
    accountFields.map((field) => (
      <View key={field.id} style={accountStyles.formContainer}>
        <View style={accountStyles.fieldContainer}>
          <Text style={accountStyles.label}>{field.title}</Text>
          {field.name !== "earnedMoney" ? (
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              contextMenuHidden={true}
              textAlign="center"
              placeholder={field.placeholder}
              value={field.name === "spentMoney" ? spentMoney : availableMoney}
              style={accountStyles.textInput}
              onChange={({ nativeEvent }) =>
                handleChangeAccountValues(nativeEvent.text, field)
              }
            />
          ) : (
            <Text style={accountStyles.earnedField}>
              {money === undefined ? 0 : money}
            </Text>
          )}
        </View>
        {field.name === "spentMoney" && (
          <Button
            name="Рассчитать остаток"
            color="#0E0034"
            onClick={() => handleCountAccountValues(field.name)}
          />
        )}
        {field.name === "availableMoney" && (
          <Button
            name="Изменить доступную сумму"
            color="#0E0034"
            onClick={() => handleCountAccountValues(field.name)}
          />
        )}
      </View>
    ));
  return (
    <View style={accountStyles.addTaskBlock}>{renderAccountFields()}</View>
  );
}

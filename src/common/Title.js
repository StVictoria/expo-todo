import React from "react";
import { View, Text } from "react-native";

import titleStyles from "./titleStyles.js";

export default function Title({ title }) {
  return (
    <View style={titleStyles.titleContainer}>
      <Text style={titleStyles.title}>{title}</Text>
    </View>
  );
}

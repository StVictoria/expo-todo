import React from "react";
import { View, Text } from "react-native";

import styles from "./titleStyles.js";

export default function Title({ title }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

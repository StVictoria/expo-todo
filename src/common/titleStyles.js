import { StyleSheet } from "react-native";

import { darkBlue } from "../styles/variables";

export default StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    backgroundColor: darkBlue,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  addTaskBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  fieldContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  icon: { position: "absolute", top: 8, left: 10 },
  textInput: {
    width: "100%",
    padding: 10,
    marginBottom: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 50,
  },
  datePicker: {
    padding: 5,
  },
});

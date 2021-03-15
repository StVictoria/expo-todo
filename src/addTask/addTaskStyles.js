import { StyleSheet } from "react-native";

export default StyleSheet.create({
  addTaskBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  icon: { marginRight: 10, marginTop: -30 },
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

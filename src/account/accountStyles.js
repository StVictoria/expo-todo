import { StyleSheet } from "react-native";

export default StyleSheet.create({
  addTaskBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    paddingVertical: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 50,
  },
});

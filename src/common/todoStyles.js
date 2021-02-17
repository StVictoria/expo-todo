import { StyleSheet } from "react-native";
export default StyleSheet.create({
  todoButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 50,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  doneButton: { width: "15%" },
  todoTask: { fontSize: 16, width: "60%", textAlign: "center" },
  restInfo: { width: "25%" },
  todoRest: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

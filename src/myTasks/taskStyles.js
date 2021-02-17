import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskButton: {
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
  taskDescription: { fontSize: 16, width: "60%", textAlign: "center" },
  restInfoBlock: { width: "25%" },
  restInfoItem: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

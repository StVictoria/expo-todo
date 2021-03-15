import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "99%",
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  doneButton: { width: "10%" },
  taskDescription: { fontSize: 16, width: "65%", textAlign: "center" },
  restInfoBlock: { width: "25%" },
  restInfoItem: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

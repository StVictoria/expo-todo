import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskButton: {
    width: "100%",
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
    paddingHorizontal: 8,
  },
  mainInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  doneButton: { marginRight: 5 },
  taskDescription: { fontSize: 16, width: "75%", textAlign: "left" },
  restInfoBlock: {
    width: "90%",
    marginTop: 10,
    paddingLeft: "12%",
  },
  restInfoItem: {
    fontSize: 12,
    marginBottom: 8,
  },
  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

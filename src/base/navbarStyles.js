import { StyleSheet } from "react-native";
export default StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0E0034",
    height: 90,
    paddingHorizontal: 20,
  },
  logoSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "46%",
  },
  logoText: {
    fontSize: 18,
    color: "#f2f2f2",
  },
  accountSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountMoney: {
    color: "#f2f2f2",
    marginRight: 10,
  },
  navButton: {
    width: 25,
    height: 25,
  },
});

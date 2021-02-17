import { StyleSheet } from "react-native";
export default StyleSheet.create({
  menu: {
    width: "100%",
  },
  tile: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 170,
    width: "100%",
  },
  tileImg: {
    position: "absolute",
    top: "50%",
    marginTop: -30,
    left: "50%",
    marginLeft: -30,
    width: 60,
    height: 60,
    opacity: 0.1,
  },
  tileTitle: {
    fontSize: 30,
    color: "black",
  },
});

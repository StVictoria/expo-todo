import { StyleSheet } from "react-native";

import { grey_light } from "../styles/variables";

export default StyleSheet.create({
  container: {
    marginTop: -30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    borderBottomColor: grey_light,
    borderBottomWidth: 1,
  },
  itemTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    marginRight: 10,
  },
  text: {
    fontSize: 15,
  },
  expandIcon: {
    textAlign: "right",
  },
});

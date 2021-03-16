import { StyleSheet } from "react-native";

import { grey_light } from "../styles/variables";

export default StyleSheet.create({
  container: {
    marginTop: -30,
  },
  itemBlock: {
    borderBottomColor: grey_light,
    borderBottomWidth: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
  expandedInfo: { paddingLeft: 40 },
  expandedInfoItem: { marginTop: 10 },
});

import { Alert } from "react-native";

export const messageWindow = (title, description) =>
  Alert.alert(title, description);

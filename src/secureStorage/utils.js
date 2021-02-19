import * as SecureStore from "expo-secure-store";

export async function saveItemToStorage(key, value) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

export async function getValueFor(key, setFunction) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    setFunction(JSON.parse(result));
  }
}

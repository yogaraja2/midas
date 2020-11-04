import { AsyncStorage } from "react-native";
import Dialog from "./Dialog";

export default class Preference {
  static storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        Dialog.showStorageAlert();
      console.log("error is: " + error);
    }
  };

  static retrieveData = async (key) => {
    try {
      const getAsyncStorageData = await AsyncStorage.getItem(key);
      return getAsyncStorageData;
    } catch (error) {
        Dialog.showStorageAlert();
      console.log(error);
    }
    return null;
  };
}

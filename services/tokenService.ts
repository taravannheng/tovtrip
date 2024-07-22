import * as SecureStore from "expo-secure-store";

const setAccessToken = async (token) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    throw error;
  }
};

const getAccessToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      return token;
    }
  } catch (error) {
    throw error;
  }
};

export { setAccessToken, getAccessToken };

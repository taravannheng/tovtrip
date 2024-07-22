import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";

// screen imports
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

// theme imports
import customTheme from "../theme/theme";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customTheme}>
        <ProfileScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { PaperProvider } from "react-native-paper";

// theme imports
import customTheme from "../theme/theme";

// screen imports
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customTheme}>
        <LoginScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

import * as React from "react";
import { View } from "react-native";
import { Appbar, Snackbar } from "react-native-paper";
import {
  TabsProvider,
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

// component imports
import TEmailTabView from "../../components/TEmailTabView/TEmailTabView";
import TPhoneTabView from "../../components/TPhoneTabView/TPhoneTabView";

const LoginScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs>
          <TabScreen label="Email">
            <View>
              <TEmailTabView
                onToggleSnackBar={onToggleSnackBar}
              ></TEmailTabView>
            </View>
          </TabScreen>
          <TabScreen label="Phone">
            <View>
              <TPhoneTabView
                onToggleSnackBar={onToggleSnackBar}
              ></TPhoneTabView>
            </View>
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        wrapperStyle={{ bottom: 0 }}
      >
        Invalid Credentials. Please try again.
      </Snackbar>
    </SafeAreaView>
  );
};

export default LoginScreen;

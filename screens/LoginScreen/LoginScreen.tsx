import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs>
          <TabScreen label="Email">
            <View>
              <TEmailTabView></TEmailTabView>
            </View>
          </TabScreen>
          <TabScreen label="Phone">
            <View>
              <TPhoneTabView></TPhoneTabView>
            </View>
          </TabScreen>
        </Tabs>
      </TabsProvider>
    </SafeAreaView>
  );
};

export default LoginScreen;

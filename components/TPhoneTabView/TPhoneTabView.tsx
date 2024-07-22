import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";

// service imports
import { signInWithPhone } from "../../services/authService";
import { setAccessToken } from "../../services/tokenService";

// component imports
import TPhoneFormField from "../TPhoneFormField/TPhoneFormField";
import TPasswordFormField from "../TPasswordFormField/TPasswordFormField";
import TSubmitButton from "../TSubmitButton/TSubmitButton";

// style import
import styles from "./TPhoneTabView.styles";

const TEmailTabView = () => {
  const theme = useTheme();
  const customStyles = styles();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    const response = await signInWithPhone(phone, password);
    const accessToken = response["data"]["accessToken"];

    // store access token locally
    setAccessToken(accessToken);

    if (accessToken) {
      router.replace("/profile");
    }
  };

  return (
    <View>
      <View style={customStyles.formField}>
        <TPhoneFormField phone={phone} setPhone={setPhone}></TPhoneFormField>
      </View>
      <View style={customStyles.formField}>
        <TPasswordFormField
          password={password}
          setPassword={setPassword}
        ></TPasswordFormField>
      </View>
      <View style={customStyles.forgotPassword}>
        <Button mode="text">Forgot Password</Button>
      </View>
      <TSubmitButton onPress={submitHandler} />
    </View>
  );
};

export default TEmailTabView;

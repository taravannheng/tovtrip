import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";

// component imports
import TEmailFormField from "../TEmailFormField/TEmailFormField";
import TPasswordFormField from "../TPasswordFormField/TPasswordFormField";
import TSubmitButton from "../TSubmitButton/TSubmitButton";

// service imports
import { signInWithEmail } from "../../services/authService";
import { setAccessToken } from "../../services/tokenService";

// style import
import styles from "./TEmailTabView.styles";

const TEmailTabView = () => {
  const theme = useTheme();
  const customStyles = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    const response = await signInWithEmail(email, password);
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
        <TEmailFormField email={email} setEmail={setEmail} />
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

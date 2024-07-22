import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, useTheme } from "react-native-paper";

// style import
import styles from "./TPasswordFormField.styles";

const TPasswordFormField = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  const theme = useTheme();
  const customStyles = styles();
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <TextInput
      style={customStyles.textInput}
      label="Password"
      underlineColor="transparent"
      left={
        <TextInput.Icon icon="lock-outline" color={theme.colors.onSurface} />
      }
      right={
        <TextInput.Icon
          color={theme.colors.onSurface}
          icon={hidePassword ? "eye" : "eye-off"}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        />
      }
      secureTextEntry={hidePassword ? false : true}
      value={password}
      onChangeText={setPassword}
    />
  );
};

export default TPasswordFormField;

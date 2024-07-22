import React, { Dispatch, SetStateAction } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

// style import
import styles from "./TEmailFormField.styles";

const TEmailFormField = ({
  email,
  setEmail,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) => {
  const customStyles = styles();
  const theme = useTheme();

  return (
    <TextInput
      style={{
        ...customStyles.textInput,
      }}
      value={email}
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
        setEmail(e.nativeEvent.text)
      }
      label=""
      underlineColor="transparent"
      left={
        <TextInput.Icon icon="email-outline" color={theme.colors.onSurface} />
      }
      placeholder="Email"
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};

export default TEmailFormField;

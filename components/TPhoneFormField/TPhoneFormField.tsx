import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { TextInput, List, useTheme } from "react-native-paper";

// style import
import styles from "./TPhoneFormField.styles";

const TPhoneFormField = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
}) => {
  const theme = useTheme();
  const customStyles = styles();

  return (
    <View style={customStyles.container}>
      <List.Item
        style={customStyles.listItem}
        title="+855"
        left={() => (
          <List.Icon
            icon={{
              uri: "https://icons.iconarchive.com/icons/wikipedia/waved-flags/512/Cambodia-Waved-Flag-icon.png",
            }}
          />
        )}
        onPress={() => {}}
      />
      <TextInput
        underlineColor="transparent"
        placeholderTextColor={theme.colors.onSurfaceVariant}
        label=""
        value={phone}
        onChangeText={setPhone}
        placeholder="XXX-XXX-XXX"
        keyboardType="phone-pad"
        style={customStyles.textInput}
      />
    </View>
  );
};

export default TPhoneFormField;

import React from "react";
import { View } from "react-native";
import { Button, Text, Icon, useTheme } from "react-native-paper";
import { GestureResponderEvent } from "react-native";

// style import
import styles from "./TSubmitButton.styles";

const TSubmitButton = ({
  disabled,
  onPress,
}: {
  onPress: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}) => {
  const customStyles = styles();

  return (
    <View style={{ position: "relative" }}>
      <View style={{ paddingHorizontal: 8 }}>
        <Button
          style={customStyles.button}
          mode="contained"
          labelStyle={{ fontSize: 16 }}
          onPress={onPress}
          disabled={disabled}
        >
          <Text>Continue</Text>
        </Button>
      </View>
      <View style={customStyles.icon}>
        <Icon source="arrow-right" size={20} />
      </View>
    </View>
  );
};

export default TSubmitButton;

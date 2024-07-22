import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    textInput: {
      height: 54,
      borderWidth: 1,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderColor: theme.colors.outline,
    },
  });
};

export default styles;

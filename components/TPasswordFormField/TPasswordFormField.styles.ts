import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    textInput: {
      height: 54,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  });
};

export default styles;

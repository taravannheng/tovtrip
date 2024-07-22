import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      overflow: "hidden",
    },
    listItem: {
      backgroundColor: theme.colors.surfaceVariant,
      borderRightColor: theme.colors.outline,
      borderRightWidth: 1,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      padding: 16,
      height: 56,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    textInput: {
      flex: 1,
      height: 54,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  });
};

export default styles;

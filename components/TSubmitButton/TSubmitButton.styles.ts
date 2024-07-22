import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 8,
      borderRadius: 1000,
    },
    icon: { position: "absolute", right: 24, top: 18 },
  });
};

export default styles;

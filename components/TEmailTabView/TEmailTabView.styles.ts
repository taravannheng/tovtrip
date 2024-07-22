import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    formField: { paddingHorizontal: 8, paddingTop: 16 },
    forgotPassword: { marginVertical: 16 },
    
  });
};

export default styles;

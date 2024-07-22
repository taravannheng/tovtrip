import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    title: {
      textAlign: "left",
      marginVertical: 16,
      marginLeft: 16,
    },
    nameCardContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    nameCard: {
      flex: 1,
      marginRight: 8,
      backgroundColor: theme.colors.surfaceVariant,
    },
    emailCardContainer: {
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    emailCard: { backgroundColor: theme.colors.surfaceVariant },
    emailCardContent: { flexDirection: "row", alignItems: "center" },
    genderContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    genderRadioGroup: {
      flexDirection: "row",
      justifyContent: "flex-end",
      padding: 0,
    },
    radioButtonItem: { margin: 0, padding: 0 },
    radioButtonItemLabel: { marginRight: 0, paddingRight: 0 },
  });
};

export default styles;

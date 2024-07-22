import { MD3LightTheme } from "react-native-paper";

const customThemeColors = {
  ...MD3LightTheme.colors,
  primary: "#70D6FA",
  surface: "#FFFFFF",
  onSurface: "#303135",
  surfaceVariant: "#F8F9FB",
  onSurfaceVariant: "#B4B4BC",
  outline: "#ECEDEE",
};

const customTheme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: customThemeColors,
};

export default customTheme;

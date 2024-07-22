import * as React from "react";
import { View } from "react-native";
import {
  Appbar,
  Text,
  Card,
  RadioButton,
  useTheme,
  Icon,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// service imports
import { getUser } from "../../services/authService";

// style import
import styles from "./ProfileScreen.styles";

const ProfileScreen = () => {
  const customStyles = styles();
  const theme = useTheme();
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        const userData = response.data;
        if (response && userData) {
          setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            gender: userData.gender,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            router.replace("/");
          }}
        />
      </Appbar.Header>
      <View>
        <Text variant="headlineLarge" style={customStyles.title}>
          Profile
        </Text>
        <View style={customStyles.nameCardContainer}>
          <Card style={customStyles.nameCard}>
            <Card.Content>
              <Text>{user.firstName}</Text>
            </Card.Content>
          </Card>
          <Card style={customStyles.nameCard}>
            <Card.Content>
              <Text>{user.lastName}</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={customStyles.emailCardContainer}>
          <Card style={customStyles.emailCard}>
            <Card.Content style={customStyles.emailCardContent}>
              <View style={{ marginRight: 8 }}>
                <Icon
                  source="email-outline"
                  size={16}
                  color={theme.colors.onSurface}
                />
              </View>

              <Text>{user.email}</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={customStyles.genderContainer}>
          <Text>Gender</Text>
          <RadioButton.Group
            onValueChange={(value) => setUser({ ...user, gender: value })}
            value={user.gender}
          >
            <View style={customStyles.genderRadioGroup}>
              <RadioButton.Item
                label="Male"
                value="Male"
                style={customStyles.radioButtonItem}
                labelStyle={{ marginRight: 0, paddingRight: 0 }}
                position="leading"
                rippleColor={theme.colors.surfaceVariant}
              />
              <RadioButton.Item
                label="Female"
                value="Female"
                style={customStyles.radioButtonItem}
                labelStyle={customStyles.radioButtonItemLabel}
                position="leading"
                rippleColor={theme.colors.surfaceVariant}
              />
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

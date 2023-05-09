import Menu from "./App/Pages/MenuPage/Menu";
import HomePage from "./App/Pages/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from "@react-navigation/native";

const App = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontSize: 16, color: "gray" },
          headerTitleAlign: "center",
          headerTitle: () => (
            <TouchableOpacity>
              <Text>Home</Text>
            </TouchableOpacity>
          ),
          headerLeft: null,
        }}
      >
        <Stack.Screen
          component={HomePage}
          name={"HomePage"}
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Menu} name={"Home"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

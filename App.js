import { useDeviceOrientation } from "@react-native-community/hooks";
//safeareaview reikes ios device
//touchablenativefeedback paspaudus ant view su background color veikia ant android tik
// dimensions api get screen
// hooks package github react native community hooks

import Browse from "./App/Pages/BrowsePage/Browse";
import HomePage from "./App/Pages/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const orientation = useDeviceOrientation();
  //console.log(orientation);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomePage} name={"Home"} />
        <Stack.Screen component={Browse} name={"Browse"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

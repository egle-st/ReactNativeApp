import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { React } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Browse from "../BrowsePage/Browse";
import ProfilePage from "../ProfilePage/ProfilePage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Browse"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Favourites") {
            iconName = focused ? "star" : "star-outline";
          } else if (route.name === "Browse") {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Menu;

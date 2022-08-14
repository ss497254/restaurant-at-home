import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/Store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const screenOptions = { headerShown: false };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"ResturantDetail"} component={ResturantDetail} />
          <Stack.Screen name={"OrderCompleted"} component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

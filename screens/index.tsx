import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { AuthContext } from "../contexts";
import { AuthContextType } from "../types/context";
import Login from "./Login";

const Stack = createStackNavigator<RootStackParamList>();

export default function Route() {
  const { auth, setAuth } = React.useContext(AuthContext) as AuthContextType;

  return (
    <NavigationContainer>
      {auth ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../Login/Auth";
import Main from "../Main/Main";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigation>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigation>
  );
};

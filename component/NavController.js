import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useLogin, useLogOut, useIsLoggedIn } from "../AuthContext";

import Main from "../Main/Main";
import Login from "../Login/Login";
export default () => {
  const isLogin = useIsLoggedIn();
  const logIn = useLogin();
  const logOut = useLogOut();
  console.log(isLogin);
  return <View style={{ flex: 1 }}>{isLogin ? <Main /> : <Login />}</View>;
};

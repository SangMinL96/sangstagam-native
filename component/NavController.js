import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useLogin, useLogOut, useIsLoggedIn } from "../AuthContext";
export default () => {
  const isLogin = useIsLoggedIn();
  const logIn = useLogin();
  const logOut = useLogOut();
  console.log(isLogin);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLogin ? (
        <TouchableOpacity onPress={logOut}>
          <Text>로그인</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>로그 sdf아웃sdfsad</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

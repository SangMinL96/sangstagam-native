import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constent from "../Constent";
const LoginLogo = styled.Image`
  width: ${constent.width / 2};
`;

const AuthContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const AuthInput = styled.TextInput`
  width: ${constent.width / 1.3};
  height: 40px;
  border: 1px solid #d2d3d5;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #f2f2f3;
  padding: 10px;
`;
const AuthBtn = styled.View`
  justify-content: center;
  align-items: center;
  width: ${constent.width / 1.3};
  height: 40px;
  margin-top: 20px;
  background-color: #3897f0;
  border-radius: 5px;
`;
const BtnText = styled.Text`
  color: whitesmoke;
`;
const AuthFooter = styled.View`
  width: ${constent.width};
  height: 40px;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const AuthBold = styled.Text`
  font-weight: bold;
  color: navy;
`;

export default ({ setLogSign }) => {
  return (
    <AuthContainer>
      <LoginLogo resizeMode="contain" source={require("../assets/logo.png")} />
      <AuthInput placeholder="아이디" />
      <AuthInput placeholder="비밀번호" />
      <AuthBtn>
        <BtnText>로그인</BtnText>
      </AuthBtn>
      <AuthFooter style={{ borderTopWidth: 1, borderTopColor: "#d2d3d5" }}>
        <TouchableOpacity onPress={() => setLogSign(false)}>
          <Text>
            계정이 없으신가요? <AuthBold>가입하기</AuthBold>
          </Text>
        </TouchableOpacity>
      </AuthFooter>
    </AuthContainer>
  );
};

import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constent from "../Constent";
const SignLoginLogo = styled.Image`
  width: ${constent.width / 2};
`;

const SignInContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SignInInput = styled.TextInput`
  width: ${constent.width / 1.3};
  height: 40px;
  border: 1px solid #d2d3d5;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #f2f2f3;
  padding: 10px;
`;
const SignInBtn = styled.View`
  justify-content: center;
  align-items: center;
  width: ${constent.width / 1.3};
  height: 40px;
  margin-top: 20px;
  background-color: #3897f0;
  border-radius: 5px;
`;
const SignBtnText = styled.Text`
  color: whitesmoke;
`;
const SignFooter = styled.View`
  width: ${constent.width};
  height: 40px;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const SignBold = styled.Text`
  font-weight: bold;
  color: navy;
`;

export default ({ setLogSign }) => {
  return (
    <SignInContainer>
      <SignLoginLogo
        resizeMode="contain"
        source={require("../assets/logo.png")}
      />
      <SignInInput placeholder="아이디" />
      <SignInInput placeholder="비밀번호" />
      <SignInBtn>
        <SignBtnText>회원가입</SignBtnText>
      </SignInBtn>
      <SignFooter style={{ borderTopWidth: 1, borderTopColor: "#d2d3d5" }}>
        <TouchableOpacity onPress={() => setLogSign(true)}>
          <Text>
            이미 계정이 있으신가요? <SignBold>로그인하기</SignBold>
          </Text>
        </TouchableOpacity>
      </SignFooter>
    </SignInContainer>
  );
};

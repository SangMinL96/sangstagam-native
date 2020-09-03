import React, { useState } from "react";

import styled from "styled-components/native";
import Auth from "./Auth";
import SignIn from "./SignIn";

const LoginContaiver = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const [LogSign, setLogSign] = useState(true);
  return (
    <LoginContaiver>
      {LogSign ? (
        <Auth setLogSign={setLogSign} />
      ) : (
        <SignIn setLogSign={setLogSign} />
      )}
    </LoginContaiver>
  );
}

export default Login;

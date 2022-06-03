import { Container } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
  const [isSignUp, setSignUp] = useState(true);
  return <Container>{isSignUp ? <Login /> : <SignUp />}</Container>;
}
export default Auth;

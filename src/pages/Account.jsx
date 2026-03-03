import React, { useState } from 'react';
import LoginForm from '../components/ui/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import MyAccount from '../components/ui/MyAccount';
const Account = () => {
  const users = useSelector((state)=>state.auth.loginUser);
  const isLoggedIn = users?.length > 0;
  return (
    isLoggedIn ? (
      <MyAccount />
    ) 
    : 
    <LoginForm />
  );
};

export default Account;

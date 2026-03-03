import React from 'react';
import { getCurrentUser } from '../api/product-api';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../feature/auth/authSlice';

const useCurrentUser = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const fetCurrentUser = async() => {
       if(!token) return null;
      const res = await getCurrentUser(token);
       dispatch(userLogin(res.data))
       console.log("user data==",res.data)
       return res.data;
    } 
    return useQuery({
        queryKey: ["currentUser",token],
        queryFn: fetCurrentUser
    })
}

export default useCurrentUser

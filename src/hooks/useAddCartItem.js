import React from 'react';
import { addCartData } from '../api/product-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cart/cartSlice';

const useAddCartItem = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch()
  return useMutation({
    mutationFn: (cartItem) => addCartData(cartItem).then((res)=>res.data),
    onSuccess:(resData)=>{
      dispatch(addToCart(resData.products[0]))
      queryClient.setQueryData(["cartItem"],resData)
    },
    onError:(error)=>{
      console.error("Cart API Error:", error);
    }
  })
}

export default useAddCartItem

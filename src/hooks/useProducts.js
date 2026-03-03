import React from 'react';
import { getAllProducts } from '../api/product-api';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
  const fetchAllProducts = () => getAllProducts().then((res)=>res.data)
  return useQuery({
    queryKey:["AllProducts"],
    queryFn:fetchAllProducts,
  })
}

export default useProducts

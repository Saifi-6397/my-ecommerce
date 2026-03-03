import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Categories from '../pages/Categories'; 
import Account from '../pages/Account';
import Page404 from '../pages/Page404';
import Category from '../pages/Category';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default AllRoutes

import React, { useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { toast } from 'react-toastify';
import useAddCartItem from '../../hooks/useAddCartItem';
import { useSelector } from 'react-redux';

const AddToCartBtn = ({ productData }) => {
    const cartData = useSelector((state) => state.cart.cartItems);
    const currentItem = cartData.find((item)=>item.id === productData?.id)

    const addCartData = useAddCartItem()
    const payload = {
        userId: 1,
        products:[{
            id:productData?.id,
            quantity:currentItem?.quantity
        }]
    }

    const handleProductAddToCart = () => {
        addCartData.mutate(payload)
        toast("Item added to cart !");      
    };

    return (
        <div className="w-full">
            <button onClick={handleProductAddToCart} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg">
                <HiOutlineShoppingBag className="text-xl" />
                <span>Add To Cart</span>
            </button>
        </div>
    )
}

export default AddToCartBtn

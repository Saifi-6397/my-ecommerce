import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { HiPlus, HiMinus } from "react-icons/hi";
import { updateCartData } from '../../api/product-api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../feature/cart/cartSlice';

const ProductQuantity = ({ singleProduct }) => {
    const cartData = useSelector((state) => state.cart.cartItems);
    const currentItem = cartData.find((item)=>item.id === singleProduct?.id)
    console.log("curent items=", currentItem)

    const [qty, setQty] = useState(currentItem ? currentItem.quantity : 1);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const payload = {
        products: [{
            id: singleProduct?.id,
            quantity: qty
        }]
    }
    const updateCart = useMutation({
        mutationFn: (updateCartQty) => updateCartData(`${updateCartQty.products[0].id}`, updateCartQty)
        .then((res) => res.data),
        onSuccess: (resData) => {
            console.log("updated cart data==", resData);
            dispatch(addToCart(resData.products[0]));
            queryClient.setQueryData(["updatedData"],resData);
        },
        onError: (error) => {
            console.error("API Error:", error);
        }
    })

    const handleIncreaseQty = () => {
        setQty(prev => prev + 1);
        updateCart.mutate(payload)
    }
    const handleDecreaseQty = () => {
        setQty(prev => prev - 1);
        updateCart.mutate(payload)
    }




    return (
        <div className='flex items-center gap-4 bg-[#F0F0F0] px-4 py-2 rounded-full font-medium'>
            <button className="hover:text-blue-600" disabled={qty === 1} onClick={handleDecreaseQty}><HiMinus /></button>
            <span>{qty}</span>
            <button className="hover:text-blue-600" onClick={handleIncreaseQty}><HiPlus /></button>
        </div>
    )
}

export default ProductQuantity

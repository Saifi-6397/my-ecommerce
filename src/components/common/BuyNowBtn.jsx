import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";

const BuyNowBtn = () => {
    return (
        <div className="w-full">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg">
                <HiOutlineShoppingBag className="text-xl" />
                <span>Buy Now</span>
            </button>
        </div>
    )
}

export default BuyNowBtn

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartBtn from '../common/AddToCartBtn';

const ProductCard = ({ item }) => {
    const [currentImg, setCurrentImg] = useState(item.thumbnail);
    return (
        <li key={item.id} className='space-y-4'>
            <Link to={`/products/${item.id}`}>
                <img src={currentImg} alt={item.title} className='bg-[#8f8a8a1f] transition-all duration-300' onMouseEnter={() => setCurrentImg(item.images[1] || item.thumbnail)} onMouseLeave={() => setCurrentImg(item.thumbnail)} />
                <h3 className='text-[18px] font-semibold'>{item.title}</h3>
            </Link>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-semibold'>${item.price}</span>
                <span className='bg-[#155dfc] text-white rounded-[5px] text-[14px] py-[2px] px-[5px] font-medium'>{Math.floor(item.discountPercentage)}% OFF</span>
            </div>
            <AddToCartBtn productData={item} />
        </li>
    )
}

export default ProductCard

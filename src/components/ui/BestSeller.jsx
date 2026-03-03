import React from 'react';
import { getBestSeller } from '../../api/product-api';
import { useQuery } from '@tanstack/react-query';
import AddToCartBtn from '../common/AddToCartBtn';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const fetchBestSeller = () => getBestSeller().then((res) => res.data)
    const { data:bestSeller, isLoading } = useQuery({
        queryKey: ["bestSellerProduct"],
        queryFn: fetchBestSeller,
    })
    const sellerPro = bestSeller?.products.slice(0, 10)
    return (
        <div className="bg-white p-8 mb-10">
            <h2 className="text-[50px] font-bold text-black mb-6 flex items-center gap-2">
                <span className="w-2 h-10 bg-blue-600 rounded-full"></span>
                Best Seller
            </h2>

            {isLoading && <h1>Loading...</h1>}

            <ul className="grid grid-cols-5 gap-10">
                {sellerPro?.map((item) => {
                    return (
                        <Link to={`/products/${item.id}`} key={item.id}>
                            <li key={item.id} className='space-y-4'>
                                <img src={item.thumbnail} alt={item.title} className='bg-[#8f8a8a1f]' />
                                <h3 className='text-[18px] font-semibold'>{item.title}</h3>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[20px] font-semibold'>${item.price}</span>
                                    <span className='bg-[#155dfc] text-white rounded-[5px] text-[14px] py-[2px] px-[5px] font-medium'>{Math.floor(item.discountPercentage)}% OFF</span>
                                </div>
                                <AddToCartBtn />
                            </li>
                        </Link>

                    )
                })}
            </ul>
        </div>
    )
}

export default BestSeller

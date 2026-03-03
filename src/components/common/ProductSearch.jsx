import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { getSearchProduct } from '../../api/product-api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ProductSearch = () => {
    const [search, setSearch] = useState('')

    const fetchSearchProduct = () => getSearchProduct(search).then((res) => res.data);
    const { data, isLoading } = useQuery({
        queryKey: ["products", search],
        queryFn: fetchSearchProduct,
        enabled: search.trim() !== ""
    })
    console.log("serach product", data)

    return (
        <div className="w-[20%]">
            <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                    type="search"
                    placeholder="Search products..."
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full py-2 pl-12 pr-4 text-sm rounded-[8px] 
                     border border-gray-200 bg-gray-50
                     focus:bg-white focus:outline-none 
                     focus:ring-2 focus:ring-indigo-500
                     transition-all duration-300"
                />
            </div>

            {isLoading && (
                <div className="absolute w-[20%] bg-white shadow-md mt-2 p-2 text-sm">
                    Loading...
                </div>
            )}
            {data?.products?.length > 0 && (
                <ul className="absolute w-[20%] bg-white shadow-lg rounded-md mt-2 max-h-60 overflow-y-auto z-50">
                    {data.products.map((item) => {
                        return (
                            <Link to={`/products/${item.id}`}>
                                <li key={item.id} className="flex gap-2 items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    <div className='w-[70px]'>
                                        <img src={item.thumbnail} alt={item.title} className='w-full' />
                                    </div>
                                    <div>
                                        {item.title}
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default ProductSearch

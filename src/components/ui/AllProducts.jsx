import React, { useState } from 'react'
import Loader from '../common/Loader';
import ProductCard from './ProductCard';
import SortingFilter from '../common/SortingFilter';
import Breadcrumbs from '../common/Breadcrumbs';
import ErrorMessage from '../common/ErrorMessage';

const AllProducts = ({ paginationData, isLoading, setSortConfig, setOrderConfig, setPage, error,refetch }) => {
    return (
        <div className='p-8'>
            <Breadcrumbs />
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className="text-[50px] font-bold text-black flex items-center gap-2">
                        <span className="w-2 h-10 bg-blue-600 rounded-full"></span>Shop All</h2>
                    <p className='mb-7'>Showing {paginationData?.products?.length} results of {paginationData?.total}</p>
                </div>
                <div>
                    <SortingFilter setSortConfig={setSortConfig} setOrderConfig={setOrderConfig} setPage={setPage} />
                </div>
            </div>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error} refetch={refetch} />}
            <ul className="grid grid-cols-5 gap-10">
                {paginationData?.products?.map(item => <ProductCard item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export default AllProducts

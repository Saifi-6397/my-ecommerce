import React, { useState } from 'react'
import usePagination from '../../hooks/usePagination';
import AllProducts from './AllProducts';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ShopPagination = () => {
    const [page, setPage] = useState(1);
    const [sortConfig, setSortConfig]= useState(null)
    const [orderConfig, setOrderConfig]= useState(null)
    const itemOnPage = 15;
    const { data: paginationData, isLoading, error,refetch } = usePagination({ page, itemOnPage, sortConfig, orderConfig});
    const totalItems = paginationData?.total || 0;
    const totalPages = Math.ceil(totalItems / itemOnPage)

    return (
        <>
            <AllProducts paginationData={paginationData} isLoading={isLoading} setSortConfig={setSortConfig} setOrderConfig ={setOrderConfig} setPage={setPage} error={error} refetch={refetch} />
            <div className="flex items-center justify-center gap-6 my-10">
                <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    <MdKeyboardArrowLeft size={24} className="text-gray-700" />
                </button>
                <div className='flex items-center gap-1'>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} onClick={() => setPage(i + 1)} className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-all
                        ${page === i + 1
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-200 border border-transparent'
                            }`}>{i + 1}</button>
                    ))}
                </div>
                <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    <MdKeyboardArrowRight size={24} className="text-gray-700" />
                </button>
            </div>
        </>
    )
}

export default ShopPagination

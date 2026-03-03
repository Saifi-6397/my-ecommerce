import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';

const Categories = () => {
    const { data: categories = [], isLoading, error, refetch } = useCategories();
    const category = categories.slice(0, 10)
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-[50px] font-bold text-black mb-6 flex items-center gap-2">
                <span className="w-2 h-10 bg-blue-600 rounded-full"></span>
                Top Categories
            </h2>

            {isLoading && <Loader />}
            {error && <ErrorMessage error={error} refetch={refetch} />}
            <ul className="grid grid-cols-5 gap-5">
                {category?.map((item) => {
                    return (
                        <li key={item.slug}>
                            <Link
                                to={`/category/${item.slug}`}
                                className="group flex items-center justify-between p-3 rounded-lg bg-blue-50 transition-all duration-200 text-black-600 hover:text-blue-700 font-medium"
                            >
                                <span className="capitalize">{item.name}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 font-bold">
                                   <FaArrowRight />
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories

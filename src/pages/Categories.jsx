import React from 'react';
import useCategories from '../hooks/useCategories';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Categories = () => {
  const {data, isLoading} = useCategories();
  return (
    <div className='px-8 py-13'>
      {isLoading && <h1>Loading...</h1>}
       <ul className="grid grid-cols-5 gap-5">
                {data?.map((item) => {
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

import React from 'react'
import { useParams } from 'react-router-dom';
import { getCategory } from '../api/product-api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import AddToCartBtn from '../components/common/AddToCartBtn';
import ErrorMessage from '../components/common/ErrorMessage';
import Loader from '../components/common/Loader'

const Category = () => {
  const param = useParams();
  const fetchCategory = () => getCategory(param.name).then((res) => res.data)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["category", param.name],
    queryFn: fetchCategory,
  })
  console.log("category products====", data)

  return (
    <div className='p-8'>
      <nav className="flex mb-4 text-gray-500 text-sm p-[10px] bg-[#f1f1f1]">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            <span className='font-semibold text-black'>{param.name}</span>
          </li>
        </ol>
      </nav>
      <h2 className='capitalize'>{param.name}</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} refetch={refetch} />}
      <ul className="grid grid-cols-5 gap-10">
        {data?.products?.map((item) => {
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

export default Category

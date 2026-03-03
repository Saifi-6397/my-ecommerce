import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../api/product-api';
import { useQuery } from '@tanstack/react-query';
import RelatedProducts from '../components/ui/RelatedProducts';
import { FaArrowDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import AddToCartBtn from '../components/common/AddToCartBtn';
import ProductQuantity from '../components/common/ProductQuantity';
import CustomerReview from '../components/ui/CustomerReview';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

const ProductDetails = () => {
  const { id } = useParams();
  const fetchProduct = () => getProduct(id).then((res) => res.data)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
  })
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    if (data?.thumbnail) {
      setCurrentImg(data?.thumbnail)
    }
  }, [data])

  console.log("products details=", data)

  return (
    <> 
    <main className='px-10 py-[70px]'>
       {isLoading && <Loader />}
       {error && <ErrorMessage error={error} refetch={refetch} />}
      <nav className="flex mb-4 text-gray-500 text-sm p-[10px] bg-[#f1f1f1]">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                </li>
                <li className="flex items-center space-x-2">
                    <span className="text-gray-400">/</span>
                    <Link to={`/category/${data?.category}`} className='font-semibold text-black'>{data?.category}</Link>
                </li>
                <li className="flex items-center space-x-2">
                    <span className="text-gray-400">/</span>
                    <span className="font-semibold text-black">{data?.title}</span>
                </li>
            </ol>
        </nav>

      <section className='flex justify-between'>
        {isLoading && <h1>Loading...</h1>}
        <section className='left-sec w-[50%] flex gap-6'>
          <div className='w-[15%] flex gap-3 flex-col'>
            {data?.images?.map((img, index) => {
              return (
                <img src={img} alt={data?.title} key={index} onMouseEnter={() => setCurrentImg(img)} className={`${currentImg === img ? 'border-1 border-blue-400' : ''} bg-[#8f8a8a1f] hover:border-1 border-blue-400`} />
              )
            })}
          </div>
          <div className='w-[70%]'>
            <img src={currentImg || data?.thumbnail} alt={data?.title} className='bg-[#8f8a8a1f] w-full' />
          </div>

        </section>
        <section className='right-sec w-[50%] flex flex-col'>
          <h5 className='uppercase'>{data?.brand}</h5>
          <h3 className='text-2xl font-medium'>{data?.title}</h3>
          <div className='bg-[#F5F5F5] flex justify-center w-[95px] items-center gap-1.5'><span> {data?.rating}</span> <span><IoIosStar /></span> | <span>{data?.reviews?.length}</span></div>
          <div className='py-8'>
            <span className='bg-[#155dfc] text-white rounded-[5px] text-[14px] pb-[2px] px-[5px] font-medium'>Hot Deal</span>
            <h4 className='text-3xl font-bold'><span className='text-[#155dfc]'><FaArrowDown className='w-[18px] inline-block -mt-[5px] me-1' />{Math.ceil(data?.discountPercentage)}%</span> <span>${data?.price}</span></h4>
          </div>
          <div>
            <h5 className='text-[18px] font-bold'>Description:</h5>
            <p className='text-[16px] leading-6 text-black'>{data?.description}</p>
          </div>
          <div className='py-7 w-[60%]'>
            <h5 className='text-[18px] font-bold'>Delivery details:</h5>
            <p className='bg-[#f5f5f5ff] py-2 px-3.5 font-medium rounded-[6px]'>{data?.shippingInformation}</p>
            <p className='bg-[#f5f5f5ff] py-2 px-3.5 mt-1.5 font-medium rounded-[6px]'>{data?.returnPolicy}</p>
          </div>
          <div className=''>
            <h5 className='text-[18px] font-bold'>Product highlights:</h5>
            <p>{data?.warrantyInformation}</p>
            <p><strong>Minimum Order Quantity</strong>: {data?.minimumOrderQuantity}</p>
            <p><strong>Rating:</strong> {data?.rating}</p>
          </div>

          <ProductQuantity singleProduct={data} />

          <div className='flex gap-3.5'>
            <AddToCartBtn productData={data} />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg">
              <span>Buy at ${data?.price}</span>
            </button>
          </div>

        </section>
      </section>
      <CustomerReview productData={data} />
      <RelatedProducts productCategory={data} />
    </main>
    </>
  )
}

export default ProductDetails

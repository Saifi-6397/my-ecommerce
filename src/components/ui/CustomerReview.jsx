import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CustomerReview = ({ productData }) => {
    return (
        <main>
            <h1>Rating and Reviews</h1>
            <section className="flex flex-col md:flex-row gap-12 p-8 bg-white items-center md:items-start font-sans">
                <article className="flex gap-8 items-center w-[50%]">
                    <div className="text-center">
                        <span className="text-8xl font-bold text-gray-900 leading-none">{Math.ceil(productData?.rating)}</span>
                        <span className="text-gray-400 text-xl font-medium mt-2">/ 5</span>
                        <p className="text-gray-400 text-xs mt-6 italic">{productData?.reviews.length} New Reviews</p>
                    </div>
                    <div className="flex flex-col gap-2.5 w-[60%]">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-yellow-500 text-[10px]">
                                    <FaStar /> <span className="text-gray-900 font-medium">{star}</span>
                                </div>
                                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gray-900 rounded-full"
                                        style={{ width: star === 5 ? '85%' : star === 4 ? '15%' : '2%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
                <section className='w-[50%]'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}>

                        {productData?.reviews.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="border border-gray-100 rounded-[2rem] p-8 shadow-sm relative bg-white">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">{item.reviewerName}</h3>
                                            <div className="flex">
                                                {Array.from({ length: item.rating }).map((_, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <FaStar className='text-yellow-500' />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <time dateTime="2024-10-13" className="text-gray-400 text-xs font-medium">
                                            {item.date}
                                        </time>
                                    </div>

                                    <p className="text-gray-500 text-[15px] leading-relaxed italic mb-8">
                                        {item.comment}
                                    </p>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>

            </section>
        </main>
    )
}

export default CustomerReview

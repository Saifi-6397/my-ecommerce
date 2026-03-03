import React from 'react';
import { getRelatedProducts } from '../../api/product-api';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const RelatedProducts = ({productCategory}) => {
    const fetchRelatedProducts = () => getRelatedProducts(productCategory.category).then((res) => res.data)
    const { data } = useQuery({
        queryKey: ["relatedProduct", productCategory],
        queryFn: fetchRelatedProducts,
    })
    // console.log('related products==', data?.products)
    return (
        <div className='pt-[50px] '>
            <h2 className="text-[40px] font-bold text-black flex items-center gap-2"><span className="w-2 h-8 bg-blue-600 rounded-full"></span>You might also like</h2>
            <ul className="grid grid-cols-5 gap-10">
                {data?.products.slice(0,5)?.map(item => <ProductCard item={item} key={item.id} />)}
            </ul>

        </div>
    )
}

export default RelatedProducts

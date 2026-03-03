import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getShopPagination } from '../api/product-api';

const usePagination = (query) => {
    const fetchShopPagination = () => getShopPagination(query).then((res) => res.data);
    return useQuery({
        queryKey: ["shopPagination",query],
        queryFn: fetchShopPagination,
        gcTime: 10 * 60 * 1000,
        placeholderData: keepPreviousData
    })
}

export default usePagination

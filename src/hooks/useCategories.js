import { getCategories } from '../api/product-api';
import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
    const fetchCategories = () => getCategories().then((res) => res.data)
    return useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    })
}

export default useCategories

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getUserLogin } from '../api/product-api';
import { useDispatch } from 'react-redux';
import { userLogin } from '../feature/auth/authSlice';

const useAuth = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch()
    return useMutation({
        mutationFn: (credentials) => getUserLogin(credentials).then((res) => res.data),
        onSuccess: (resData) => {
            console.log("user login response Data==",resData);
            dispatch(userLogin(resData));
            queryClient.setQueryData(["loginUser"],resData)
            localStorage.setItem("accessToken",resData.accessToken)
        },
        onError: (error) => {
            console.error("user login Error:", error);
        }
    })
}

export default useAuth

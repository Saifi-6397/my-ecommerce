import axios from 'axios';

const api = axios.create({
    baseURL: "https://dummyjson.com/"
})

export const getCategories = () => {
    return api.get('products/categories');
}
export const getCategory = (name) => {
    return api.get(`products/category/${name}`)
}
export const getBestSeller = () => {
    return api.get('products?sortBy=rating&order=asc')
}
export const getProduct = (id) => {
    return api.get(`products/${id}`)
}
export const getAllProducts = () => {
    return api.get('products')
}
export const getRelatedProducts = (cateName) => {
    return api.get(`products/category/${cateName}`)
}
export const addCartData = (cartItem) => {
    return api.post("carts/add", cartItem)
}
export const updateCartData = (cartId, cartQty) => {
    return api.patch(`carts/${cartId}`, cartQty)
}
export const deleteCartData = (cartItemId) => {
    return api.delete(`carts/${cartItemId}`)
}
export const getShopPagination = (query) => {
    // console.log(query)
    return api.get('products?', {
        params: {
            limit: query.itemOnPage,
            skip: (query.page - 1) * query.itemOnPage,
            sortBy: query.sortConfig,
            order: query.orderConfig,
        },
    })
}
export const getUserLogin = (credentials) => {
    return api.post('auth/login', credentials)
}
export const getCurrentUser = (token) => {
    return api.get('auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    })
}
export const getSearchProduct = (searchQuery) =>{
    return api.get(`products/search?q=${searchQuery}`)
}
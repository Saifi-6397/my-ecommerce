import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ProductQuantity from '../components/common/ProductQuantity';
import { deleteCartData } from '../api/product-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromCart } from '../feature/cart/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartData?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)

  const deleteCart = useMutation({
    mutationFn: (cartItemId) => deleteCartData(cartItemId).then((res) => res.data),
  })

  const handleCartDelete = (id) => {
    deleteCart.mutate(id, {
      onSuccess: () => {
        dispatch(removeFromCart(id));
        toast("Product removed from cart!");
        queryClient.invalidateQueries(["updatedCartData"])
      },
      onError: (error) => {
        console.log("API Error", error)
      }
    })
  }


  return (
    <main className='max-w-7xl mx-auto p-5 md:p-10'>
      <h1 className='text-3xl font-bold uppercase mb-8 tracking-tight'>Your Cart</h1>

      {cartData.length > 0 ? (
        <div className='flex flex-col lg:flex-row gap-10'>

          <section className='flex-1 border border-gray-200 rounded-2xl p-4 md:p-6 space-y-6'>
            <ul className='divide-y divide-gray-200'>
              {cartData?.map((item) => (
                <li key={item.id} className='flex gap-4 py-6 first:pt-0 last:pb-0'>
                  <div className='w-24 h-24 md:w-32 md:h-32 bg-[#F0EEED] rounded-xl flex-shrink-0'>
                    <Link to={`/products/${item.id}`}>
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain" />
                    </Link>
                  </div>
                  <div className='flex flex-col justify-between flex-1'>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className='font-bold text-lg md:text-xl capitalize leading-tight'>{item.title}</h3>
                        <p className='text-sm text-gray-500 mt-1'>{item.shippingInformation}</p>
                      </div>
                      <button className='text-red-500 hover:text-red-600 transition'>
                        <HiOutlineTrash size={24} onClick={() => handleCartDelete(item.id)} />
                      </button>
                    </div>

                    <div className='flex justify-between items-end mt-4'>
                      <span className='text-xl md:text-2xl font-bold'>${item.price}</span>

                      <ProductQuantity singleProduct={item} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className='w-full lg:w-[400px] h-fit border border-gray-200 rounded-2xl p-6 space-y-6'>
            <h3 className='text-2xl font-bold'>Order Summary</h3>

            <div className='space-y-4 text-lg'>
              <div className='flex justify-between text-gray-500'>
                <span>Subtotal</span>
                <span className="text-black font-bold">${Math.ceil(totalPrice)}</span>
              </div>
              <div className='flex justify-between text-gray-500'>
                <span>Delivery Fee</span>
                <span className="text-black font-bold">$15</span>
              </div>
              <hr className=' text-gray-200' />
              <div className='flex justify-between text-xl font-bold'>
                <span>Total</span>
                <span>${Math.ceil(totalPrice + 15)}</span>
              </div>
            </div>
            <button className='w-full bg-blue-600 text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition'>
              Go to Checkout
            </button>
          </section>
        </div>

      ) : (
        <section className='flex flex-col border-gray-200 items-center justify-center py-20 border rounded-2xl bg-gray-50'>
          <p className='text-2xl font-bold text-gray-400 mb-6 uppercase tracking-wider'>Your Cart is Empty</p>
          <Link to='/shop'>
            <button className='bg-blue-600 hover:bg-blue-700  text-white px-10 py-4 rounded-full font-bold transition shadow-lg'>
              RETURN TO SHOP
            </button>
          </Link>
        </section>
      )}
    </main>
  )
}

export default Cart

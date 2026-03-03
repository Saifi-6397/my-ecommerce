import { all } from 'axios';
import { useState } from 'react';
import { HiOutlineShoppingBag, HiOutlineUserCircle, HiMenu, HiX } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import useCurrentUser from '../../hooks/useCurrentUser';
import ProductSearch from './ProductSearch';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartData = useSelector((state) => state.cart.cartItems)
   const users = useSelector((state)=>state.auth.loginUser);
  // const {data} = useCurrentUser();
  console.log("user fetch data", users)
  // const {cartItems} = useSelector((state) => state.cart)
  const cartCount = cartData.length;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                MY<span className="text-gray-800">SHOP</span>
              </h1>
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <NavLink to="/" className="hover:text-blue-600 transition">Home</NavLink>
            <NavLink to="/shop" className="hover:text-blue-600 transition">Shop</NavLink>
            <NavLink to="/categories" className="hover:text-blue-600 transition">Categories</NavLink>
            {/* <NavLink to="/" className="hover:text-blue-600 transition">Home</NavLink> */}
          </div>
          
            <ProductSearch />
       

          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <NavLink to="/account">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
              {users ? (
                  <img src={users[0].image} alt={users[0].username} className='w-[30px]' />
              ) : (
                <HiOutlineUserCircle size={26} />
              )}
              
            </button>
            </NavLink>

            <NavLink to="cart">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition relative">
                <HiOutlineShoppingBag size={26} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </NavLink>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 focus:outline-none"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Categories</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
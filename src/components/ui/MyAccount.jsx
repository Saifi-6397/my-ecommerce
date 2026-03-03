import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../feature/auth/authSlice';
import { HiOutlineLogout, HiOutlineUser, HiOutlineMail, HiOutlineShoppingBag } from "react-icons/hi";
import { toast } from 'react-toastify';

const MyAccount = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.loginUser);
    const user = users && users.length > 0 ? users[0] : null;
     const handleLogout =() =>{
      dispatch(userLogout());
       toast("User Logout Succesfully!"); 
  }
      
   
    return (
        <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Your Account</h1>
                        <p className="text-gray-500 mt-1">Manage your profile and view your order history.</p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-red-100 transition-all border border-red-100 shadow-sm"
                    >
                        <HiOutlineLogout size={20} />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar / Profile Card */}
                    <div className="md:col-span-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <img 
                                src={user.image} 
                                alt={user.username} 
                                className="w-32 h-32 rounded-full border-4 border-blue-100 p-1 object-cover shadow-inner"
                            />
                            <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h2>
                        <p className="text-blue-600 font-medium text-sm">@{user.username}</p>
                        
                        <div className="w-full mt-8 space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl text-gray-600">
                                <HiOutlineMail className="text-blue-500" size={18} />
                                <span className="text-xs truncate">{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl text-gray-600">
                                <HiOutlineUser className="text-blue-500" size={18} />
                                <span className="text-xs capitalize">{user.gender}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Account Details */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-medium">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">First Name</label>
                                    <p className="text-gray-900 text-lg border-b border-gray-100 pb-2">{user.firstName}</p>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Last Name</label>
                                    <p className="text-gray-900 text-lg border-b border-gray-100 pb-2">{user.lastName}</p>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email Address</label>
                                    <p className="text-gray-900 text-lg border-b border-gray-100 pb-2">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders Placeholder */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                    <HiOutlineShoppingBag size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Order History</h4>
                                    <p className="text-xs text-gray-400">View and track your previous orders</p>
                                </div>
                            </div>
                            <button className="text-blue-600 font-bold text-sm hover:underline">View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;
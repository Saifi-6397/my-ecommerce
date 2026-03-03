import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () => {
    return (
        <nav className="flex mb-4 text-gray-500 text-sm p-[10px] bg-[#f1f1f1]">
            <ol className="flex items-center space-x-2">
                <li>
                    <NavLink to="/" className="hover:text-blue-600 transition-colors">Home</NavLink>
                </li>
                <li className="flex items-center space-x-2">
                    <span className="text-gray-400">/</span>
                    <span className="font-semibold text-black">Shop</span>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs

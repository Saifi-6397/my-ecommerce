import React from 'react'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const userLoginMutation = useAuth()
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const formData = new FormData(e.target);
    //   const formEntry = Object.fromEntries(formData.entries());
    //   userLoginMutation.mutate(formEntry)
    // }
    const formAction = (formData) => {
        const username = formData.get('username');
        const password = formData.get('password');
        userLoginMutation.mutate({ username, password })
         toast("User Logged in Succesfully!");     
    }
    return (
        <div className="flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md rounded-3 p-8 bg-[#8f8a8a1f]">
                <h2 className="text-3xl font-bold text-center">
                    Login
                </h2>
                <form className="mt-8 space-y-5" action={formAction}>
                    <div>
                        <label className="block text-xs font-semibold text-black mb-2">
                            Username or email address
                        </label>
                        <input
                            type="text"
                            placeholder="john"
                            name="username"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#fff] focus:outline-none focus:ring-2 focus:ring-[#70becc]"
                        />
                    </div>

                    <div className="">
                        <label className="block text-xs font-semibold text-black mb-2">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#70becc]"
                        />
                    </div>
                    <button  type="submit"
                        className="w-full signup-btn place-items-center py-3 rounded-xl text-white font-semibold tracking-wide hover:opacity-90 transition bg-blue-500" disabled={userLoginMutation.isPending}>
                        {userLoginMutation.isPending ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

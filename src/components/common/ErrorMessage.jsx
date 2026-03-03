import React from 'react'

const ErrorMessage = ({error,refetch}) => {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-red-50 rounded-2xl border border-red-100">
            <h2 className="text-red-600 font-bold text-xl">Oops! Something went wrong.</h2>
            <p className="text-red-400 mt-2">{error.message || "Product Not Loaded."}</p>
            <button
                onClick={() => refetch()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
                Try Again
            </button>
        </div>
    )
}

export default ErrorMessage

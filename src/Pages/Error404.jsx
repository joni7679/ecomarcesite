import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className='container'>

            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
                    <p className="text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>
                    <Link to={'/'} className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { Link } from 'react-router-dom';


export default function ProductAddToCart() {
    return (
        <>
            <Header />
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  shadow-lg">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20  outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                                        <p className="text-sm dark:text-gray-600">Classic</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">59.99</p>
                                        <p className="text-sm line-through dark:text-gray-400">75.50</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <MdOutlineDeleteOutline className="inline text-xl" />
                                        <span>Remove</span>
                                    </button>
                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <GrFavorite className='inline text-xl' />
                                        <span>Add to favorites</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                        <p className="text-sm dark:text-gray-600">White</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">99.95</p>
                                        <p className="text-sm line-through dark:text-gray-400">150</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <MdOutlineDeleteOutline className="inline text-xl" />
                                        <span>Remove</span>
                                    </button>
                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <GrFavorite className='inline text-xl' />
                                        <span>Add to favorites</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/phodark:to-5fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Set of travel chargers" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Set of travel chargers</h3>
                                        <p className="text-sm dark:text-gray-600">Black</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">8.99</p>
                                        <p className="text-sm line-through dark:text-gray-400">15.99</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <MdOutlineDeleteOutline className="inline text-xl" />
                                        <span>Remove</span>
                                    </button>
                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <GrFavorite className='inline text-xl' />
                                        <span>Add to favorites</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="p-5 rounded">
                    <p>Total amount:
                        <span className="font-semibold">357 </span>
                    </p>
                    <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to={'/'} type="button" className="px-6 py-2 border rounded-md hover:bg-red-600 hover:text-white transition duration-100">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </Link>
                    <button type="button" className="px-6 py-2 border rounded-md hover:bg-blue-600 hover:text-white transitio duration-100">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

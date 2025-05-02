import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryApi } from '../redux/slices/categoriesSlice';
import { productsApi } from '../redux/slices/productSlice';

export default function Sidebar() {
    let dispatch = useDispatch();
    const { categories, selectedCategory, status, error } = useSelector((state) => state.categories)
    console.log(categories);
    const { products, isLoading, } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(categoryApi())
    }, [dispatch])

    // filter logic
    const filterData = () =>{
        
    }

        let colors = () => {

            return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`;

        }
    console.log(colors());

    return (
        <>
            <div className="sidebar w-[30%] h-[33rem] shadow-lg bg-white p-5 rounded  border-r-2 border-gray-300   overflow-y-scroll scrollbar-hide">
                <div className='categories'>
                    <p className='text-2xl font-semibold'>Categories</p>
                    <ul class="p-4">
                        {categories.length > 0 ? (
                            categories.map((categorie, i) => (
                                <li key={i} className="text-gray-600 cursor-pointer hover:text-gray-900">
                                    {categorie.name}
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500">Loading categories...</p>
                        )}
                    </ul>
                </div>
                <div class="w-full h-[2px] pr-2 pl-2 bg-gray-300"></div>
                <div className='filter'>
                    <p class="text-lg font-semibold mt-2">Filter by :</p>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                    <div class="flex flex-col space-y-2 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
                            <span class="text-gray-700"></span>
                            <input type="radio" name="filterproduct" id="" />
                            <span className='text-gray-600'>example</span>
                        </label>
                    </div>
                </div>
                <div class="w-full h-[2px] pr-2 pl-2 bg-gray-300 mt-5"></div>
                <div className='colors'>
                    <p className='text-2xl font-semibold capitalize'>colors</p>
                    <div className='flex flex-col items-start gap-2 colors-lists'>
                        <div className='flex items-center gap-3 space-y-2 '>
                            <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='flex items-center gap-3 space-y-2 '>
                            <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='flex items-center gap-3 space-y-2 '>
                            <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='flex items-center gap-3 space-y-2 '>
                            <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                            <input type="checkbox" name="" id="" />
                        </div>


                        {/* <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                        <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span>
                        <span style={{ backgroundColor: colors() }} className='inline-block w-5 h-5 rounded-full'></span> */}
                    </div>

                </div>
                <div class="w-full h-[2px] pr-2 pl-2 bg-gray-300 mt-5"></div>
                <div className='price'>
                    <p>price</p>
                    <div className='flex items-start gap-3'>

                        <span>0</span>
                        <span>300</span>
                    </div>
                    <input type="range" name="" id="" />

                </div>
            </div>

        </>
    )
}

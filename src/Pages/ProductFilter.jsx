import React, { useEffect } from 'react';
import Header from '../components/Header';
import { FaStar } from "react-icons/fa";
import '../index.css';
import Sidebar from '../components/Sidebar';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsApi } from '../redux/slices/productSlice';

export default function ProductFilter() {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(productsApi());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const addToCartHandler = (id) => {
        console.log("Your product ID is", id);
    }

    return (
        <>
            <Header />
            <div className='container max-w-[1500px] mx-auto px-5 py-5 flex items-start gap-3'>
                <Sidebar />
                <div className='filter-products w-[70%] h-[33rem] flex items-center flex-wrap gap-5 overflow-y-scroll scrollbar-hide'>
                    {products.map((p) => (
                        <div>
                            <Link to={`/buypage/${p.id}`} key={p.id} className="product w-[250px] rounded-md shadow overflow-hidden">
                                <img src={p.thumbnail} alt={p.title} className="object-cover object-center w-full duration-150 rounded-t-md h-72 hover:scale-110" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <h3 className="text-base font-medium text-gray-800 md:text-lg">{p.title}</h3>
                                    <div className='flex items-center gap-2'>
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <FaStar className='text-yellow-400' />
                                        <div className='reviews'>(245 reviews)</div>
                                    </div>
                                    <p className="text-lg font-bold text-blue-600 md:text-xl">₹{p.price}</p>

                                </div>

                            </Link>
                            <button onClick={() => addToCartHandler(p.id)} className='p-5 text-white rounded bg-blue-950'>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>



            </div>
        </>
    );
}

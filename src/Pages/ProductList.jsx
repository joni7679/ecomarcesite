import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productsApi } from '../redux/slices/productSlice';


export default function ProductList() {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.products);
    

    // Dispatch the async thunk to fetch products when the component mounts
    useEffect(() => {
        dispatch(productsApi());
    }, [dispatch]);

    // Handle loading and error states
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    // filter out of products dymic



    return (
        <div className="container px-5 mt-5 max-auto">
            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:place-items-center products">
                {/* Map over products and display them */}
                {products.map((product, index) => {
                    return (
                        <Link to={`/productfilter`} key={index} className="flex flex-col w-[250px] p-6 space-y-6 rounded-lg shadow-md sm:w-[100%]">
                            <div className='h-[250px]'>
                                <img src={product.thumbnail} alt={product.title} className="object-contain w-full h-full" />
                            </div>
                            <div className='px-5'>
                                {product.title?.slice(0, 30)}...
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

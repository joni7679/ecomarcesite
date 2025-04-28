import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productsApi } from '../redux/slices/productSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.products);
  console.log("Redux Products:", products);


  useEffect(() => {
    dispatch(productsApi());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No Products Available</div>;

  const product = products.find((p) => p.id.toString() === id);
  console.log("Your product is", product);

  if (!product) return <div>Product Not Found</div>;

  return (
    <>
      <Header />
      <div className="container px-[5%]">
        <div className="grid p-4 mt-5 bg-white rounded-lg shadow-lg md:grid-cols-2">
          <div className='h-auto'>
            <div className='w-[300px] h-[250px] mx-auto'>
              <img src={product.thumbnail} className="object-cover w-full h-full" alt={product.title} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-5">
              <button className='px-[25px] py-[10px] rounded bg-[#ff9f00] text-white capitalize'>
                Buy Now
              </button>
              <button className='px-[25px] py-[10px] rounded bg-[#FB641B] text-white capitalize'>
                Add to Cart
              </button>
            </div>
          </div>

          <div className='p-4'>
            <h1 className='mt-3 text-3xl font-semibold'>{product.title}</h1>
            <p className='mt-5 font-semibold text-green-500 capitalize'>Special price ₹{product.price}</p>
            <p className='mt-3 text-slate-700'>{product.description}</p>
            <p> <span className='font-semibold capitalize'>warrantyInformation</span>: {product.warrantyInformation}</p>
            <p> <span className='font-semibold capitalize'>shippingInformation</span>: {product.shippingInformation}</p>
            <p> <span className='font-semibold capitalize'>availabilityStatus</span>: {product.availabilityStatus}</p>
            <p className='mt-3 font-semibold'>Available Stock: {product.stock}</p>
          </div>
        </div>

        <h1>Customer Reviews Previous</h1>
        {product.reviews.map((review, i) => {
          return (
            <div key={i} className="review-card shadow-lg p-5 ">
              <p><span className='font-semibold'>Customer Email </span>:{review.reviewerEmail}</p>
              <p><span className='font-semibold'>Customer Name</span> :{review.reviewerName}</p>
              <p>{review.comment}</p>
              <p><span className='font-semibold'>Rating</span> : {review.rating}</p>
              <p> <span className='font-semibold'>Date</span>: {new Date(review.date).toLocaleDateString()}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

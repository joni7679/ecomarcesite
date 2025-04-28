// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { productsApi } from '../redux/slices/productSlice';
// import { useParams } from 'react-router-dom';

// function Reviewcard() {
//     const dispatch = useDispatch();
//     const { products, isLoading, error } = useSelector((state) => state.products);
//     console.log("Redux Products:", products);


//     useEffect(() => {
//         dispatch(productsApi());
//     }, [dispatch]);
//     return (
//         <>

//             {products.map((product) => {
//                 return (
//                     <div key={product.id} className="max-w-sm rounded-lg shadow-xl">
//                         <h3>{product.title}</h3>
//                         {product.reviews.map((review, i) => {
//                             return (
//                                 <div key={i} className="review-card">
//                                     <p>{review.reviewerEmail}</p>
//                                     <p>{review.comment}</p>
//                                     <p>Rating: {review.rating}</p>
//                                     <p>Date: {new Date(review.date).toLocaleDateString()}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 );
//             })}


//         </>
//     )
// }

// export default Reviewcard
import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from '../slices/productSlice';
import { authSlice } from '../slices/authSlice';
import { cartSlice } from '../slices/cartSlice';
import { categoriesSlice } from '../slices/categoriesSlice';




export const store = configureStore({
    reducer: {
        'products': productsSlice.reducer,
        "auths": authSlice.reducer,
        "carts": cartSlice.reducer,
        "categories": categoriesSlice.reducer,

    }
})
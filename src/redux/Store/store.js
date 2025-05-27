import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from '../slices/productSlice';
import { authSlice } from '../slices/authSlice';
import { cartSlice } from '../slices/cartSlice';
import { categoriesSlice } from '../slices/categoriesSlice';
import adminSlice from '../slices/adminSlice';




export const store = configureStore({
    reducer: {
        'products': productsSlice.reducer,
        "auths": authSlice.reducer,
        "admin": adminSlice.reducer,
        "carts": cartSlice.reducer,
        "categories": categoriesSlice.reducer,

    }
})
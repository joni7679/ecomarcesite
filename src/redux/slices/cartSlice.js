

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// Step 1: Initial state
let initialState = {
    cartItems: [],
    isLoading: false,
    error: null,
};

// Step 2: Define the slice
export let cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
    },

});

// Step 3: Export the reducer
export const { addTocart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

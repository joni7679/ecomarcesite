import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Step 1: Correct the asyncThunk to return the data properly
export let productsApi = createAsyncThunk('fetch/data', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products)
        return response.data.products; // Returning the data directly

    } catch (error) {
        throw Error('Error fetching products:', error.message);     }
});

// Step 2: Initial state
let initialState = {
    products: [],
    isLoading: false,
    error: null,
};

// Step 3: Define the slice
export let productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        SearchQuery: (state, action) => {
            state.products = state.push(action.payload);

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(productsApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(productsApi.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(productsApi.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },
});

// Step 4: Export the reducer
export const { SearchQuery } = productsSlice.actions; // Exporting the action
export default productsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Call to fetch categories
export const categoryApi = createAsyncThunk("category/fetch", async () => {
    try {
        let res = await axios.get(`https://dummyjson.com/products/categories`);
        return res.data; 
    } catch (error) {
        throw new Error("Error fetching categories: " + error.message);
    }
});

const initialState = {
    categories: [], // Store all categories
    selectedCategory: null,
    filteredProducts: [],
    allProducts: [], // Store all products initially
    status: 'idle',
    error: null
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(categoryApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(categoryApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload; 
            })
            .addCase(categoryApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// Export actions and reducer
// export const { setProducts, filterByCategory } = filterSlice.actions;
export default filterSlice.reducer;

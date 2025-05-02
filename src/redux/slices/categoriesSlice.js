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
// products
const initialState = {
    categories: [], // Store all categories
    selectedCategory: 'All',
    status: 'idle',
    error: null,

};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(categoryApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(categoryApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = ['All', ...action.payload];
            })
            .addCase(categoryApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// Export actions and reducer
export const { selectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

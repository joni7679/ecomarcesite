import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetch data using api 



// login data

// Step 1: Initial state
let initialState = {
    auths: [],
    isLoading: false,
    error: null,
};

// Step 2: Define the slice
export let authSlice = createSlice({
    name: 'auths',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            return {
                ...state, // copy
                auths: [...state.auths, action.payload]
            }

        },
        editData: (state, action) => {
            return {

            }
        },
    
        delAuths: (state, action) => {
            state.auths = state.auths.filter(auth => auth.id !== action.payload.id);
        }
        

    },
    // extraReducers:{}


});
export const { addAuth, editData, delAuths } = authSlice.actions;
export default authSlice;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch data using API
export const authApiData = createAsyncThunk("fetchData", async (_, { rejectWithValue }) => {
    try {
        let res = await axios.get(`http://localhost:3000/authes`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Login function
export const loginAuthData = createAsyncThunk(
    "auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            let res = await axios.get(`http://localhost:3000/authes`);
            let users = res.data;

            console.log("All Users:", users);

            let matchedUser = users.find(user =>
                user.email === userData.email &&
                user.number === userData.number &&
                user.password === userData.password
            );

            if (!matchedUser) {
                return rejectWithValue("Invalid email, number, or password!");
            }

            console.log("User found:", matchedUser);
            window.localStorage.setItem("user", JSON.stringify(matchedUser));
            return matchedUser;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Initial state
const initialState = {
    auths: [],
    isLoading: false,
    error: null,
    isLoggin:false,
};

// Define the slice
export const authSlice = createSlice({
    name: 'auths',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.auths.push(action.payload);
        },
        delAuths: (state, action) => {
            state.auths = state.auths.filter(auth => auth.id !== action.payload);
        },
        fetchAuthsData: (state, action) => {
            state.auths = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authApiData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(authApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auths = action.payload;
            })
            .addCase(authApiData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(loginAuthData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginAuthData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auths = action.payload;
                state.isLoggin=true;
            })
            .addCase(loginAuthData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isLoggin=false;
            });
    }
});

export const { addAuth, delAuths, fetchAuthsData } = authSlice.actions;
export default authSlice;

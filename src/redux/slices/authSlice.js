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

// edit data
export const editData = createAsyncThunk("edit", async (id) => {
    try {
        let res = await axios.get(`http://localhost:3000/authes/${id}`);
        let data = await res.data;
        console.log("edit data is", data);
        return data;


    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const storedUser = JSON.parse(localStorage.getItem("user"));


// Initial state
const initialState = {
    auths: [],
    isLoading: false,
    currentUser: storedUser || null,
    isLoggedIn: storedUser ? true : false,
    error: null,

};

// Define the slice
export const authSlice = createSlice({
    name: 'auths',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            return {
                ...state,
                auths: [...state.auths, action.payload]
            }
        },
        delAuths: (state, action) => {
            state.auths = state.auths.filter(auth => auth.id !== action.payload);
        },
        editAuth: (state, action) => {
            return {
                ...state,
                auths: state.auths.map((user, index) => {
                    if (user.id === action.payload.id) {
                        return action.payload
                    }
                    return user
                })
            }
        },
        logOut: (state) => {
            localStorage.removeItem("user");
            state.currentUser = null;
            state.auths = null,
                state.isLoggedIn = false;
        },
        fetchAuthsData: (state, action) => {
            state.auths = action.payload;
        },


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
                state.error = action.message;
            })
            .addCase(loginAuthData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginAuthData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auths = action.payload;
                state.isLoggedIn = true;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(loginAuthData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isLoggedIn = false;
            })

            .addCase(editData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.auths = action.payload;
                state.isLoggedIn = true;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(editData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.message;
                state.isLoggedIn = false;

            })

    }
});

export const { addAuth, delAuths, fetchAuthsData, editAuth, logOut } = authSlice.actions;
export default authSlice;

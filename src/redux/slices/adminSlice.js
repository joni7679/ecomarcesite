import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch data using API
export const fetchAdmin = createAsyncThunk(
    'admin/fetchAdmin',
    async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin');

            let admin = response.data;
            return admin

        } catch (error) {
            console.error("Error fetching admin data:", error);
            throw error;
        }

    }
);

// login admin data
export const loginAdmin = createAsyncThunk("login/admin", async (adminData, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/admin');
        response.data;
        // match admin 
        let matchAdmin = response.data.find(admin => admin.email === adminData.email && admin.password === adminData.password && admin.number === adminData.number);
        console.log("matchAdmin:", matchAdmin);

        if (!matchAdmin) {
            throw new Error("Invalid email ,Number & password");
        }
        // Store the matched admin in localStorage
        localStorage.setItem("admin", JSON.stringify(matchAdmin));
        return matchAdmin;


    } catch (error) {
        return rejectWithValue = (error.message)

    }

})


// parse admin data
let parseAdminData = JSON.parse(localStorage.getItem(""))

// Initial state
const initialState = {
    admin: [],
    isLoading: false,
    currentAdmin: null,
    isLoggedIn: false,
    error: null,

};

// Define the slice
export const adminSlice = createSlice({
    name: 'admin',
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
        builder.addCase(fetchAdmin.pending, (state) => {
            state.isLoading = true,
                state.error = null;
        })
        builder.addCase(fetchAdmin.fulfilled, (state, action) => {
            state.isLoading = false,
                state.admin = action.payload,
                state.error = null
        })
        builder.addCase(fetchAdmin.rejected, (state, action) => {
            state.isLoading = false,
                state.error = action.message
        })
        builder.addCase(loginAdmin.pending, (state) => {
            state.isLoading = true,
                state.error = null;
        })
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isLoggedIn = true,
                state.currentAdmin = action.payload
            localStorage.setItem("admin", JSON.stringify(action.payload));
        })
        builder.addCase(loginAdmin.rejected, (state, action) => {
            state.isLoading = false,
                state.error = action.message
        })

    }

});

export const { addAuth, delAuths, fetchAuthsData, editAuth, logOut } = adminSlice.actions;
export default adminSlice;

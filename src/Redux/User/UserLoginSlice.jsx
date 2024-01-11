import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { userLoginRoute, userRegisterRoute } from "../../Constant/ServerApi";

export const signupUser = createAsyncThunk("user/signup", async ({username,password,email}) => {
    try {
        const res = await axios.post(`${userRegisterRoute}`, {username,password,email} )
        return res.data;
    } catch (error) {
        throw error.message
    }
})

export const loginUser = createAsyncThunk("user/login", async ({username,password}) => {
    try {
        const res = await axios.post(`${userLoginRoute}`, {username,password} , { withCredentials: true })
        return res.data;
    } catch (error) {
        console.log(error.message,"error.message loginUser");
        throw error.message
    }
})

export const UserSilce = createSlice({
    name: "user",
    initialState:{
        userData : null,
        isLoading: false,
        error:null,

    },
    reducers:{
        setUser:(state , action) =>{
            state.userData=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        })   
        // =============
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        })      
        
    }
})


export const {setUser}  = UserSilce.actions;
export default UserSilce.reducer
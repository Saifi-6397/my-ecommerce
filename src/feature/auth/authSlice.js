import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loginUser:null,
        token: localStorage.getItem("accessToken") || null
    },
    reducers:{
        userLogin : (state, action) => {
            state.loginUser = [action.payload];
        },
        userLogout : (state) => {
            state.loginUser = null;
            state.token = null;
            localStorage.removeItem('accessToken')
        }
    }
})

export const {userLogin, userLogout} = authSlice.actions;
export default authSlice.reducer 
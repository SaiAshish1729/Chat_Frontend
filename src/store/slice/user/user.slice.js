import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'


const initialState = {
    isAuthenticated: false,
    screenLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        Login: (state) => {
            console.log("Hello login user ...")
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            console.log("Fulfilled")
            // console.log("pyload : ", action.payload)
        });
        builder.addCase(loginUserThunk.pending, (state, action) => {
            console.log("Pending ...")
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log("Rejected")
        });
    },

})


export const { Login } = userSlice.actions

// export default userSlice.reducer
export const userReducer = userSlice.reducer;
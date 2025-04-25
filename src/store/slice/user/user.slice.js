import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'


const initialState = {
    isAuthenticated: false,
    screenLoading: false,
    userProfile: null,
    buttonLoading: false,
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
            // console.log("pyload : ", action.payload)
            state.userProfile = action.payload?.data
            state.isAuthenticated = true;
            state.buttonLoading = false
        });
        builder.addCase(loginUserThunk.pending, (state, action) => {
            console.log("Pending ...")
            state.buttonLoading = true
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
        });
    },

})


export const { Login } = userSlice.actions

// export default userSlice.reducer
export const userReducer = userSlice.reducer;
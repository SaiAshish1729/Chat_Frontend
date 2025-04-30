import { createSlice } from '@reduxjs/toolkit'
import { getOtherUserThunk, loginUserThunk, logoutUserThunk } from './user.thunk'


const initialState = {
    isAuthenticated: false,
    screenLoading: true,
    buttonLoading: true,
    userProfile: null,
    otherUsers: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedInUser: (state, action) => {
            const user = action.payload;
            state.userProfile = user;
            state.isAuthenticated = !!user;
            state.screenLoading = false;
        }
    },

    extraReducers: (builder) => {
        // login user
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            const user = action.payload?.data;
            state.userProfile = user
            state.isAuthenticated = true;
            state.buttonLoading = false

            localStorage.setItem('user', JSON.stringify(user));
        });
        builder.addCase(loginUserThunk.pending, (state, action) => {
            console.log("Pending ...")
            state.buttonLoading = true
            state.isAuthenticated = false;
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log("Rejected")
            state.buttonLoading = false
            state.isAuthenticated = false;
        });

        // logout user
        builder.addCase(logoutUserThunk.pending, (state, action) => {
            // console.log("Pending ...")
            state.screenLoading = true;
        });
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            // console.log("Fulfilled.");
            state.isAuthenticated = false;
            state.screenLoading = false;
            state.userProfile = null;
            // console.log("Payload : ", action.payload);
        });

        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            // console.log("Rejected")

        });

        // other user's list
        builder.addCase(getOtherUserThunk.pending, (state, action) => {
            // console.log("Pending ...")
            state.screenLoading = true;
        });
        builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
            // console.log("Fulfilled.");
            state.screenLoading = false;
            state.otherUsers = action.payload?.data
            console.log("other_users : ", action.payload);
        });

        builder.addCase(getOtherUserThunk.rejected, (state, action) => {
            // console.log("Rejected")
        });
    },

})


export const { Login } = userSlice.actions

// export default userSlice.reducer
export const userReducer = userSlice.reducer;
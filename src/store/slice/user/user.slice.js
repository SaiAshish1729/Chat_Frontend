/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { getOtherUserThunk, loginUserThunk, logoutUserThunk, userProfileThunk } from './user.thunk'


const initialState = {
    isAuthenticated: false,
    screenLoading: true,
    buttonLoading: true,
    userProfile: null,
    otherUsers: null,
    selectedUser: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
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
            state.screenLoading = true;
        });
        builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
            state.screenLoading = false;
            state.otherUsers = action.payload?.data
        });
        builder.addCase(getOtherUserThunk.rejected, (state, action) => {
            // console.log("Rejected")
        });

        // user profile userProfileThunk
        builder.addCase(userProfileThunk.fulfilled, (state, action) => {
            const user = action.payload?.data;
            state.isAuthenticated = true;
            state.buttonLoading = false
            state.userProfile = user;
        });
        builder.addCase(userProfileThunk.pending, (state, action) => {
            console.log("Profile Pending ...")
        });
        builder.addCase(userProfileThunk.rejected, (state, action) => {
            console.log("Profile Rejected")
            state.buttonLoading = false
        });

    },

})


export const { setSelectedUser } = userSlice.actions

// export default userSlice.reducer
export const userReducer = userSlice.reducer;
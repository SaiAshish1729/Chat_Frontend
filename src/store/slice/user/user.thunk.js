import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../Components/utilities/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const loginUserThunk = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post("/login", {
                username, password
            });
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
)

export const registerUserThunk = createAsyncThunk(
    'user/signup',
    async ({ fullName, username, password, confirmPassword, gender }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post("/user-registration", {
                fullName, username, password, confirmPassword, gender
            });
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
)

export const logoutUserThunk = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/logout");
            localStorage.removeItem("user")
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
)

export const userProfileThunk = createAsyncThunk(
    'user/get-profile',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/user-profile");
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },

)

export const getOtherUserThunk = createAsyncThunk(
    'user/getOtherUsers',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/other-users");
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },


)
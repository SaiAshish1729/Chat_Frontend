import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../Components/utilities/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const loginUserThunk = createAsyncThunk(
    'users',
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
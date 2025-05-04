/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../Components/utilities/axiosInstance';
import toast from 'react-hot-toast';

export const sendMessageThunk = createAsyncThunk(
    'message/send-message',
    async ({ receiverId, message }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post(`/send-message/${receiverId}`, {
                message
            });
            console.log("message_data : ", res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
)

export const getMessageThunk = createAsyncThunk(
    'message/get-messages',
    async ({ receiverId }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get(`/get-messages/${receiverId}`);
            console.log("message_data : ", res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    },
)
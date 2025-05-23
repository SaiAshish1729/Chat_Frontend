/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { sendMessageThunk, getMessageThunk } from './message.thunk.jsx';


const initialState = {
    buttonLoading: false,
    screenLoading: false,
    messages: [],
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setNewMessage: (state, action) => {
            const oldMessages = state.messages ?? [];
            state.messages = [...oldMessages, action.payload];
        },
    },

    extraReducers: (builder) => {
        // send message
        builder.addCase(sendMessageThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            // console.log("Fulfilled_send_message :", action.payload);
            // state.messages = [...state.messages, action.payload.data]
            if (Array.isArray(state.messages)) {
                state.messages = [...state.messages, action.payload.data];
            } else {
                state.messages = [action.payload.data]; // fallback for null or corrupted state
            }
            state.buttonLoading = false;
        });

        builder.addCase(sendMessageThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        });

        // get message
        builder.addCase(getMessageThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            // console.log("Fulfilled_get_message :", action.payload);
            state.messages = action.payload.data;
            // state.messages = [...(state.messages ?? []), action.payload.data];
            state.buttonLoading = false;
        });

        builder.addCase(getMessageThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        });

    },

})


export const { setNewMessage } = messageSlice.actions
export const messageReducer = messageSlice.reducer;
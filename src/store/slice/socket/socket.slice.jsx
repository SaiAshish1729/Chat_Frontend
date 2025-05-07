import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client"

const initialState = {
    buttonLoading: false,
    screenLoading: false,
    socket: null,
    onlineUsers: null,
};

export const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        initializeSocket: (state, action) => {
            const socket = io(import.meta.env.VITE_DB_ORIGIN, {
                query: {
                    userId: action.payload,
                },
            });
            state.socket = socket;
            // socket.on("onlineUsers", (onlineUsers) => {
            //     console.log("onlineUsers", onlineUsers)
            // })
        },

        setOnlineUsers: (state, action) => {
            console.log("payload ", action.payload)
            state.onlineUsers = action.payload;
            console.log(onlineUsers)
        },
    },
});


export const { initializeSocket, setOnlineUsers } = socketSlice.actions
export const socketReducer = socketSlice.reducer;
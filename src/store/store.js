import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slice/user/user.slice'
import { messageSlice } from './slice/messages/message.slice'

export const store = configureStore({
    reducer: {
        userReducer,
        messageSlice
    },
})
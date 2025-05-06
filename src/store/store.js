import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slice/user/user.slice'
import { messageReducer } from './slice/messages/message.slice'
import { socketReducer } from './slice/socket/socket.slice'

export const store = configureStore({
    reducer: {
        userReducer,
        messageReducer,
        socketReducer
    },
})
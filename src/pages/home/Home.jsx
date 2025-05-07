import React, { useEffect } from 'react';
import MessageContainer from './MessageContainer.jsx';
import UserSideBar from './UserSideBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { initializeSocket, setOnlineUsers } from '../../store/slice/socket/socket.slice.jsx';

const Home = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, userProfile } = useSelector((state) => state.userReducer);

    useEffect(() => {
        if (!isAuthenticated) return
        dispatch(initializeSocket(userProfile?._id), setOnlineUsers(userProfile?._id));
    }, [isAuthenticated])
    return (
        <div className="flex">
            {/* <h1>Home Page</h1> */}
            <UserSideBar />
            <MessageContainer />
        </div>
    );
}

export default Home
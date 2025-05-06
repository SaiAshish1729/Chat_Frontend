import React from 'react';
import MessageContainer from './MessageContainer.jsx';
import UserSideBar from './UserSideBar.jsx';
import { useSelector } from 'react-redux';

const Home = () => {
    // const { isAuthenticated } = useSelector((state) => state.userreducer);
    // console.log("isAuth : ", isAuthenticated);

    return (
        <div className="flex">
            {/* <h1>Home Page</h1> */}
            <UserSideBar />
            <MessageContainer />
        </div>
    );
}

export default Home;

import React from 'react';
import MessageContainer from './MessageContainer.jsx';
import UserSideBar from './UserSideBar.jsx';

const Home = () => {
    return (
        <div className="flex">
            {/* <h1>Home Page</h1> */}
            <UserSideBar />
            <MessageContainer />
        </div>
    );
}

export default Home;

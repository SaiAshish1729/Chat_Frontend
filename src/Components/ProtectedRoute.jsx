import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state.userReducer);
    // console.log("8. isAuthenticated : ", isAuthenticated);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            // dispatch(loggedInUser(JSON.parse(storedUser)));
            navigate("/login")
        }
    }, [isAuthenticated]);

    return children
}

export default ProtectedRoute
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from '../../store/slice/user/user.thunk';

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (e) => {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const dispatch = useDispatch();
    const handleLogin = async () => {
        const resp = await dispatch(loginUserThunk(loginData));
        if (resp.payload?.success == true) {
            toast.success(resp.payload.message);
            navigate("/");
        }
    };

    const { isAuthenticated } = useSelector((state) => state.userReducer);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            // dispatch(loggedInUser(JSON.parse(storedUser)));
            navigate("/")
        }
    }, []);
    return (
        <div className="flex justify-center items-center p-6 min-h-screen bg-base-100">
            <div className="max-w-md w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Please Login..!!</h2>

                <label className="input input-bordered flex items-center gap-2 w-full">
                    <FaUser />
                    <input
                        type="text"
                        name="username"
                        className="grow"
                        placeholder="Username"
                        onChange={handleInputChange}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">
                    <IoKeySharp />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="grow"
                        onChange={handleInputChange}
                    />
                </label>

                <button className="btn btn-primary w-full" onClick={handleLogin}>
                    Login
                </button>

                <p className="text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-400 underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login

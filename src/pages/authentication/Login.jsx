import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const Login = () => {
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
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2 w-full">
                    <IoKeySharp />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="grow"
                    />
                </label>

                {/* <label className="input input-bordered flex items-center gap-2 w-full">
                    <IoKeySharp />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="grow"
                    />
                </label> */}

                <button className="btn btn-primary w-full">
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

export default Login;

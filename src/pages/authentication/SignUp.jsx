import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    return (
        <div className="flex justify-center items-center p-6 min-h-screen bg-base-100">
            <div className="max-w-md w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Please Signup..!!</h2>

                <label className="input input-bordered flex items-center gap-2 w-full">
                    <FaUser />
                    <input
                        type="text"
                        name="fullName"
                        className="grow"
                        placeholder="Full Name"
                    />
                </label>

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

                <label className="input input-bordered flex items-center gap-2 w-full">
                    <IoKeySharp />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="grow"
                    />
                </label>

                <div className="flex flex-col w-full">
                    <p className="mb-2 font-medium">Gender</p>
                    <div className="flex gap-5 px-3 py-2 border rounded-lg border-base-300 bg-base-100">
                        <label htmlFor="male" className="flex items-center gap-2">
                            <input
                                id="male"
                                type="radio"
                                name="gender"
                                value="male"
                                className="radio radio-primary"
                            />
                            Male
                        </label>

                        <label htmlFor="female" className="flex items-center gap-2">
                            <input
                                id="female"
                                type="radio"
                                name="gender"
                                value="female"
                                className="radio radio-primary"
                            />
                            Female
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary w-full">
                    Signup
                </button>

                <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;

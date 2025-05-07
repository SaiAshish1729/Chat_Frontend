import React, { useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk, getOtherUserThunk } from '../../store/slice/user/user.thunk';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UserSideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        const res = await dispatch(logoutUserThunk());
        toast.success(res.payload.message);
        navigate("/login");
    }

    const { otherUsers, userProfile } = useSelector(state => state.userReducer);
    // console.log("OtherUsers : ", otherUsers);

    useEffect(() => {
        dispatch(getOtherUserThunk());
    }, []);
    return (
        <div className="max-w-[20em] w-full h-screen flex flex-col border-r border-r-white/10">
            <h1 className="bg-black mx-3 rounded-lg mt-3 px-2 py-1 text-[#7480FF] text-xl font-semibold">
                Chats
            </h1>

            <div className="p-3">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        // onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                        className="grow"
                        placeholder="Search"
                    />
                    <IoSearch />
                </label>
            </div>

            <div className="h-full overflow-y-auto px-3 flex flex-col gap-2">
                {otherUsers?.map((userDetails) => {
                    return (
                        <User key={userDetails?._id} userDetails={userDetails} />
                    )
                })}
            </div>

            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <div className="avatar ">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={userProfile?.avatar} />
                            {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                        </div>
                    </div>
                    <h2>{userProfile?.username}</h2>
                </div>

                <button onClick={handleLogout} className="btn btn-primary btn-sm px-4">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default UserSideBar;

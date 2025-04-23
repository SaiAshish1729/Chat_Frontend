import React from 'react';

const User = () => {
    return (
        <>
            {/* <div className="avatar avatar-online">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div> */}

            <div
                // onClick={handleUserClick}
                className={`flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer
                   
                    }`}
            >
                {/* <div className={`avatar ${isUserOnline && 'online'}`}> */}
                <div className={`avatar online}`}>
                    <div className="w-12 rounded-full">
                        {/* <img src={userDetails?.avatar} /> */}
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h2 className="line-clamp-1">Full_Name</h2>
                    <p className="text-xs">Ashish</p>
                </div>
            </div>

        </>

    );
}

export default User;

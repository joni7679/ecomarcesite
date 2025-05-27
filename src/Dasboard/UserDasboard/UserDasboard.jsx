import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { logOut } from '../../redux/slices/authSlice';
import Sidebar from './Sidebar';

function UserDashboard() {
    const [userData, setUserData] = useState(null); // Initialize as null
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setUserData(parsedUser);
        }
    }, []);

    // Handle log out
    const handleLogOut = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            toast.success("Log Out SuccessFully")
            dispatch(logOut());
            setTimeout(() => {
                navigate(`/login`);
            }, 1000);
        }
    }

    return (
        <>
            <ToastContainer />
            <nav className='flex items-center justify-between w-full h-20 p-5 bg-[#111827]'>
                {userData ? (
                    <h2 className='text-white'>Welcome to your dashboard, {userData.name || "Guest"}!</h2>
                ) : (
                    <h2 className='text-white'>Loading...</h2>
                )}
                <button onClick={handleLogOut} className='p-5 text-white bg-[#282b30] rounded cursor-pointer'>Log Out</button>
            </nav>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-[30%]  bg-gray-900'>
                    <Sidebar />
                </div>
                <div className='w-full md:w-[70%]  bg-gray-900'>
                    <div className='flex items-center justify-center w-full h-full'>
                    <Outlet />
                    </div>
                
                </div>
            </div>

        </>
    )
}

export default UserDashboard;

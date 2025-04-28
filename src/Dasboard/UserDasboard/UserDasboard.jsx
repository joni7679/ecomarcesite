import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function UserDasboard() {
    const [userData, SetUserData] = useState();
    let dispatch = useDispatch();
    let navigate = useNavigate();


    useEffect(() => {
        console.log("User component mounted");
        let user = localStorage.getItem("user");
        if (user) {
            let parsedUser = JSON.parse(user);
            console.log(parsedUser);
            SetUserData(parsedUser)
        }
    }, [])
    
    // handle log out
    const handleLogOut =()=>{
        let logOut=window.confirm("Are You Comfrim went To Log out");
        if(logOut){
            localStorage.removeItem("user");
            toast.success("Log Out Successfully");
            setTimeout(()=>{
                navigate(`/login`)
            },1000)
        }    
    }
    
    return (
        <>
        <ToastContainer/>
            <nav className='flex items-center justify-between w-full h-20 p-5 bg-red-800'>
                {userData ? (
                    <h2 className='text-white'>Welcome to your dashboard, {userData.name || "Guest"}! </h2>
                ) : (
                    null
                )}
                <button onClick={handleLogOut} className='p-5 text-white bg-blue-500 rounded cursor-pointer'>log out</button>
            </nav>
        </>
    )
}

export default UserDasboard
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authApiData } from '../../redux/slices/authSlice';
import axios from 'axios';

function UserProfile() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [authData, SetAuthData] = useState({})
  const authsData = useSelector((state) => state.auths.auths);
  console.log("authsData", authsData);
  const authsId = JSON.parse(localStorage.getItem("user"));
  console.log("userId", authsId);
  const [formData, setFormData] = useState({
    name: authData.name || "",
    email: authData.email || "",
    pincode: authData.pincode || "",
    state: authData.state || "",
    district: authData.district || "",
  });







  useEffect(() => {
    if (authsId) {

    }
  }, [])

  useEffect(() => {
    dispatch(authApiData())

  }, [])


  return (
    <>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className="max-w-md p-4 mx-auto shadow-lg bg-[#0c0c0c] rounded-md">
          <form className="p-6 text-center">
            <h2 className="mb-4 text-xl font-semibold text-white">My Profile</h2>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Name"
                value={formData.name}
              />
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Pincode"
              />
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="State"
              />
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="District"
              />
              <button className="w-full text-white bg-[#0b0202] px-[25px] py-[10px] rounded-sm">Update Profile</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default UserProfile
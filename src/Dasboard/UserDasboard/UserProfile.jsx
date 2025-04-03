import React from 'react'

function UserProfile() {
  return (
    <>
    <div className='flex items-center justify-center w-full h-screen'>
    <div className="max-w-md p-4 mx-auto shadow-lg">
        <form className="p-6 text-center">
          <h2 className="mb-4 text-xl font-semibold">Edit Profile</h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Name"
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
            <button className="w-full text-white bg-blue-800 px-[25px] py-[10px] rounded-sm">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
     
    </>
  )
}

export default UserProfile
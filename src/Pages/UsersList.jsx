import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { authApiData, delAuths } from '../redux/slices/authSlice';

function UsersList() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { auths, isLoading, error } = useSelector((state) => state.auths)
    console.log("authsData", auths);

    useEffect(() => {
        dispatch(authApiData())
    }, [dispatch])

    // handelAuthData
    const handleDeleteAuthdata = (id) => {

        let confim = window.confirm("Are You Sure Went To Delete This Data");
        if (confim) {
            dispatch(delAuths(id));
        }


    }

    return (
        <>
            <div className="container p-4 mx-auto mt-5 ">
                <Link to={'/'} className="p-5 text-white bg-green-600 rounded">Back</Link>
                <h1 className="mt-5 mb-4 text-2xl font-bold">User Table</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 shadow rounded-3xl">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">User ID</th>
                                <th className="px-4 py-2 border">Username</th>
                                <th className="px-4 py-2 border">Phone Number</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Password</th>
                                <th colSpan={2} className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>    
                        <tbody>
                            {auths.length > 0 ? (
                                auths.map((user) => (
                                    <tr key={user.id} className=''>
                                        <td className="p-2 border-2 border-solid">{user.id}</td>
                                        <td className="p-2 border-2 border-solid">{user.name}</td>
                                        <td className="p-2 border-2 border-solid">{user.number}</td>
                                        <td className="p-2 border-2 border-solid">{user.email}</td>
                                        <td className="p-2 border-2 border-solid">{user.password}</td>

                                        <td className="flex items-center gap-3 p-5 text-white border-2 border-solid rounded">
                                            <button className='px-[25px] py-[10px] bg-blue-600 rounded-md'>edit</button>
                                            <button onClick={() => handleDeleteAuthdata(user.id)} className='px-[25px] py-[10px] bg-red-600 rounded-md'>Delete</button>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-4 text-center">No Users Available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default UsersList
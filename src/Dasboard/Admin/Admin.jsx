import React from 'react'
import Sidebar from './Sidebar'


function Admin() {
    return (
        <>
            <div className='w-full bg-red-600 p-7 text-white' >wellcome to admin</div>
            <div className='flex'>
                <Sidebar />
            </div>
        </>

    )
}

export default Admin
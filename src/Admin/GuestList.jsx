import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'
import { FaTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

function GuestList() {
    const [ user, setUser ] = useState([]);
    const [loading, setLoading] = useState(true)
    
    
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/getAll-users")
            const data = await response.json()
            setUser(data.data) 
            setLoading(false)       
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchUsers()
    })

  return (
    <>
        <div className="flex">
            <AdminSidebar/>
            <div className="guestlist mt-12 m-3 ml-[5em] md:ml-[18em] overflow-y-auto h-screen">
                <div className="btn flex justify-end py-2">
                    <Link to='/newGuest'>
                        <button className='bg-[tomato] text-white text-sm font-semibold py-2 px-3 rounded'>Add New User</button>
                    </Link>
                </div>
                <div className="table w-fit h-fit bg-white border-gray-700 border-[1.4px] rounded-lg">
                    <table>
                        <thead className='text-lg font-bold border-b-2'>
                            <tr>
                                <th className='px-[3.8em] py-3 bg-[lightblue] rounded-tl-lg'>Id</th>
                                <th className='px-[3.8em] py-3'>Name</th>
                                <th className='px-[3.8em] py-3 bg-[lightblue]'>Email</th>
                                <th className='px-[3.8em] py-3'>Role</th>
                                <th className='px-[3.8em] py-3 bg-[lightblue]'>isVerified</th>
                                <th className='px-[3.8em] py-3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm font-medium text-center'>
                            {loading ? (
                                <div className="">
                                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                                        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                                            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div> 
                            ):(
                                user.map((items, index) => (
                                    <tr key={index}>
                                        <td className='p-5 bg-[lightblue] border-b-2 rounded-bl-lg'>{items._id}</td>
                                        <div className="p-5 px-10 text-center border-b-2">
                                            <td className>{items.firstName}</td>
                                            <td>{items.lastName}</td>
                                        </div>
                                        <td className='p-5 bg-[lightblue] border-b-2 text-center'>{items.email}</td>
                                        <td className='py-5 border-b-2'>{items.role}</td>
                                        <td className='p-5 bg-[lightblue] border-b-2'>{items.isverified ? "True" : "False"}</td>
                                        <td className='py-7 border-b-2 flex justify-center'>
                                            <CiEdit className='text-xl mx-2 hover:cursor-pointer'/>
                                            <FaTrashCan className='text-xl mx-2 hover:cursor-pointer hover:rotate-[360deg] transition-all'/>
                                        </td>
                                    </tr>
                                ))
                            )}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default GuestList
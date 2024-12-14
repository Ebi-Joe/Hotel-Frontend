import React, { useContext, useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom';

function Room() {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchRooms = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/getAll-room");
            const rooms = await response.json()
            setRoom(rooms.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
  }
  useEffect(() => {
    fetchRooms()
  })

  return (
    <>
        <div className="flex bg-slate-100">
            <AdminSidebar />
            <div className="rooms mt-16 ml-[5em] md:ml-[17em] overflow-x-scroll">
              <div className="btn flex justify-end py-2 px-4">
                <Link to='/newRoom'>
                  <button className='bg-[tomato] text-white text-sm font-semibold py-2 px-3 rounded'>Add New Room</button>
                </Link>
              </div>
              <div className="table w-fit h-fit bg-white border-gray-700 border-[1.4px] rounded-lg">
                    <table>
                        <thead className='text-lg font-bold border-b-2'>
                            <tr>
                                <th className='px-[3em] rounded-tl-lg'>RoomType</th>
                                <th className='px-[3em] bg-[lightblue]'>RoomType Id</th>
                                <th className='px-[3em]'>Room Id</th>
                                <th className='px-[3em] bg-[lightblue]'>Room No</th>
                                <th className='px-[3em]'>Availability</th>
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
                                room.map((item, index)=>(
                                    <tr key={index}>
                                        <td className='p-5 border-b-2 rounded-bl-lg w-full'>
                                            <h1>{item.roomType.name}</h1>
                                        </td>
                                        <td className='p-5 border-b-2 w-full bg-[lightblue]'>
                                            <h1>{item.roomType.id}</h1>
                                        </td>
                                        <td className='p-5 border-b-2 w-full'>
                                            <h1>{item.roomId}</h1>
                                        </td>
                                        <td className='py-5 border-b-2 w-full text-2xl bg-[lightblue]'>
                                            <h1>{item.roomNo}</h1>
                                        </td>
                                        <td className='py-5 border-b-2 w-full'>
                                            <h1>{item.isAvailable ? "Available" : "Soldout"}</h1>
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

export default Room
import React, { useContext } from 'react'
import AdminSidebar from './AdminSidebar'
import { IoKey } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";
import { LuArrowUpDown } from "react-icons/lu";
import HotelContext from '../context/HotelContext';

function Dashboard() {

    const { roomType, count, no, totalAmount } = useContext(HotelContext)

  return (
    <>
        <div className="dashboard flex bg-slate-100">
            <AdminSidebar/>
            <div className="dash flex-1 font-[poppins,sans-serif] max-w-5xl ml-[5em] md:ml-[18em] overflow-y-auto">
                <h2 className='m-4 text-[2rem] font-semibold tracking-wide'>Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 border-[1px] rounded-md border-black] bg-white">
                    <div className="1 flex m-4 p-2">
                        <div className="icn bg-[tomato] text-white text-3xl p-4 rounded-lg">
                            <LuArrowUpDown />
                        </div>
                        <div className="txt px-6">
                            <h1 className='text-3xl font-semibold'>${totalAmount}</h1>
                            <h1 className='text-sm text-gray-400 tracking-wide'>Total Incomes</h1>
                        </div>
                    </div>
                    <div className="2 flex p-4 justify-between bg-[#f97e68] rounded-lg text-white border-[1px] m-4">
                        <div className="txt">
                            <h1 className='font-bold text-xl'>{no}</h1>
                            <h1 className='text-xs font-semibold'>All Users</h1>
                        </div>
                        <div className="user bg-black text-2xl p-3 rounded">
                            <PiUsersFill />
                        </div>
                    </div>
                    <div className="3 flex border-[1px] align-center justify-between p-4 rounded-lg bg-amber-50 m-4">
                        <div className="txt">
                            <h1 className='font-bold text-xl'>{count}</h1>
                            <h1 className='text-xs font-semibold text-gray-400'>Rooms</h1>
                        </div>
                        <div className="key bg-red-200 rounded text-2xl p-3 text-red-400">
                            <IoKey />
                        </div>
                    </div>
                </div>
                <div className="popular">
                    <h1 className='text-2xl font-bold py-4'>Popular Rooms</h1>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 mx-2">
                        {roomType.map((items, index) => (
                            <div key={index} className="">
                                <div className="flex relative m-2">
                                    <img src={items.images[0].img} className='rounded-md object-cover h-[45vh] brightness-75' alt="" />
                                    <h1 className='absolute text-white top-[70%] px-3'>{items.name}</h1>
                                    <h1 className={`absolute text-white text-[.9rem] top-[58%] rounded py-[0.3rem] px-3 mx-3 ${items.availabilityStatus === "Available" ? "bg-green-400" : "bg-red-400"}`}>
                                        {items.availabilityStatus === "Available" ? "Available" : "Soldout"}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
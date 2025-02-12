import React, { useContext } from 'react'
import AdminSidebar from './AdminSidebar'
import HotelContext from '../context/HotelContext'
import { FaCalendar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link, Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

function Concierge() {
    const { concierge, deleteConcierge, isAuthenticated, user, loading } = useContext(HotelContext);

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/unauthorized' />
    }

    if (user && user.data && user.data.role !== 'Admin') {
        return <Navigate to='/unauthorized' />;
    }

  return (
    <div>
        <div className="flex">
            <AdminSidebar/>
            <div className="concierge max-w-5xl mx-auto mt-12 ml-[5em] md:ml-[17em]">
                <div className="btn flex justify-end m-2">
                    <Link to='/newConcierge'>
                        <button className='bg-[tomato] text-white text-sm font-bold p-2 rounded'>Add New Concierge</button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {concierge.map((item, index) => (
                        <div key={index} className="bg-gray-300 rounded border-2 border-gray-200 m-2 p-5 hover:shadow hover:shadow-[#b4b4b4] ease-in-out">
                            <div className="flex justify-center py-2">
                                <img src={item.images[0].img} alt="" className='object-cover h-[5.813rem] w-[5.813rem] rounded-full'/>
                            </div>
                            <h1 className='py-2 text-lg font-semibold text-center'>{item.name}</h1>
                            <h1 className='py-2 text-xs text-center'>{`#EMP-${item._id}`}</h1>
                            <div className="icn py-3 flex justify-center">
                                <div className="bg-green-100 text-green-500 hover:text-white hover:bg-green-400 p-3 rounded-full mx-1.5">
                                    <FaCalendar />
                                </div>
                                <div className="bg-green-100 text-green-500 hover:text-white hover:bg-green-400 p-3 rounded-full mx-1.5">
                                    <FaPhoneAlt />
                                </div>
                                <div className="bg-slate-100 p-3 rounded-full mx-1.5 relative group">
                                    <BsThreeDots />
                                    <div className="hidden absolute top-full bg-slate-200 rounded-md group-hover:block">
                                        <div className="px-7 p-2 bg-slate-200 rounded-t-md focus-within:block">
                                            <button className='text-xs font-semibold flex'><CiEdit className='mt-[0.17rem] mx-1' />Edit</button>
                                        </div>
                                        <div className="flex px-7 p-2 bg-slate-200 rounded-b-md hover:cursor-pointer" onClick={() => deleteConcierge(item.id)}>
                                            <button className='text-xs font-semibold flex'><BsTrash className='mt-[0.17rem] mx-1' />Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between my-3">
                                <h1 className='text-sm tracking-wide font-medium font-[poppins,sans serif]'>Joined at {item.date}</h1>
                                <h1 className='p-1 px-2 rounded text-[12px] bg-green-300 text-white'>Active</h1>
                            </div>
                            <div className="py-1">
                                <h1 className='text-sm font-semibold text-slate-500'>Job Desc</h1>
                                <h1 className='py-1 text-xs font-medium'>{item.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Concierge
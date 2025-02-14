import React, { useContext, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import HotelContext from '../context/HotelContext';
import Loader from '../components/Loader';

function newRoom() {
    const { isAuthenticated, user, loading } = useContext(HotelContext)
    const [ roomType, setRoomType ] = useState('');
    const [ roomNo, setRoomNo ] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [good, setGood] = useState('')
    const [loadings, setLoading] = useState(false)

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/unauthorized' />
    }

    if (user && user.data && user.data.role !== 'Admin') {
        return <Navigate to='/unauthorized' />;
    }

    const roomHandler = async (e) => {
        e.preventDefault()
        if (!roomType || !roomNo) {
            setError("Please Fill In All Fields")
            return
        }
        setError('');
        setGood('')
        setLoading(true);

        try {
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/newRoom", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({ roomType, roomNo })
            })
            const data = await res.json()
            console.log(data)
            if(res.ok) {
                setGood("New Room Created Successfully")
                setTimeout(() => {
                    navigate("/room")
                    window.location.reload()
                }, 2000);
                setRoomType("")
                setRoomNo('')
            } else {
                if (data.message ) {
                    setError(data.message)
                  } else {
                    setError("An error occurred. Please try again.");
                  }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading("")
        }
    }
  return (
    <>
        <div className="flex items-center justify-center">
            {error && <div className="error-message fixed text-white bg-red-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
        <div className="flex h-screen bg-slate-200">
            <AdminSidebar/>
            <div className="ml-[5em] md:ml-[17em] mt-16">
                <div className="flex">
                    <Link to='/room'>
                        <div className="flex text-xl font-semibold mx-2 text-[tomato]">
                            <h1 className='px-1'>Rooms</h1>
                            <RxDoubleArrowLeft className='mt-1.5 font-bold'/>
                        </div>
                    </Link>
                    <h1 className='text-xl font-semibold'>New Room</h1>
                </div>
                <div className="p-4">
                    <div className="bg-[tomato] rounded-xl p-4 pt-8 md:flex">
                        <div className="form">
                            <form onSubmit={roomHandler} action="">
                                <div className="lg:flex">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>RoomType:</label>
                                        <input type="text" onChange={(e) => setRoomType(e.target.value)} placeholder='Enter RoomType Id Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>RoomNo:</label>
                                        <input type="number" onChange={(e) => setRoomNo(e.target.value)} name="" placeholder='Enter Room No Here'  className='block w-full text-black border border-gray-300 rounded-lg outline-none p-2 m-2 bg-gray-50'/>
                                    </div>
                                </div>
                                <div className="btn m-4 text-center">
                                    <button disabled={loadings} className='m- p-2 px-4 bg-green-400 text-white font-semibold rounded-md hover:bg-[#55ea55] hover:text-black'>{loadings ? "Creating Room" : "Create Room"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default newRoom
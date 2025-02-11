import React, { useContext, useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import HotelContext from '../context/HotelContext'
import { Link } from 'react-router-dom';

function GuestOrders() {
    const { order } = useContext(HotelContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(false);
        };
        fetchData();
    }, []);

  return (
    <>
        <div className="flex overflow-x-hidden">
            <AdminSidebar/>
            <div className="guestorder mt-12 m-3 ml-[5em] md:ml-[18em]">
                <div className="btn flex justify-end py-2">
                    <Link to='/newGuestOrders'>
                        <button className='bg-[tomato] text-white text-sm font-semibold py-2 px-3 rounded'>Add New Guest Order</button>
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2">
                    {order.map((items, index) => (
                        <div key={index} className="bg-[#ffc8be] m-1 p-4 rounded-lg">
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Booking_Id:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>#B-{items._id}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>RoomType_Id:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.roomType}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>RoomName:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.roomName}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl'>Guest Name:</h2>
                                <div className="flex font-semibold md:px-2">
                                    <h2 className='md:text-xl px-1'>{items.firstName}</h2>
                                    <h2 className='md:text-xl px-1'>{items.lastName}</h2>
                                </div>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Guest Email:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.email}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>CheckIn Date:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.CheckInDate}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>CheckIn Time:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.CheckInTime}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>CheckOut Date:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.CheckOutDate}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>CheckOut Time:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.CheckOutTime}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Total Days:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.totalDays}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Rooms:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.rooms}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Amount:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.amount}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Booking Time:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.createdAtTime}</h2>
                            </div>
                            <div className="mx-2 md:flex">
                                <h2 className='md:text-xl py-1'>Booking Date:</h2>
                                <h2 className='md:text-xl font-semibold py-1 md:px-4'>{items.createdAtDate}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default GuestOrders
import React, { useContext, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link, Navigate } from 'react-router-dom'
import { RxDoubleArrowLeft } from "react-icons/rx";
import HotelContext from '../context/HotelContext';
import Loader from '../components/Loader';

function NewGuestOrder() {
    const [error, setError] = useState('');
    const [good, setGood] = useState();
    const [loadings, setLoading] = useState(false);
    const { isAuthenticated, user, loading } = useContext(HotelContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/unauthorized' />
    }

    if (user && user.data && user.data.role !== 'Admin') {
        return <Navigate to='/unauthorized' />;
    }
    
    const today = new Date().toISOString().split("T")[0]

    const handlePayment = async (e) => {
        e.preventDefault();

        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const currency = e.target.elements.currency.value;
        const roomType = e.target.elements.roomType.value;
        const roomName = e.target.elements.roomName.value;
        const rooms = e.target.elements.rooms.value;
        const CheckInDate = e.target.elements.CheckInDate.value;
        const CheckOutDate = e.target.elements.CheckOutDate.value;
        const amount = e.target.elements.amount.value;
        const totalDays = e.target.elements.totalDays.value;
    
        if (!firstName || !lastName || !phone || !email || !currency || !roomType || !roomName || !rooms || !CheckInDate || !CheckOutDate || !amount || !totalDays) {
            console.log(firstName, lastName, phone, email, currency, roomType, roomName, rooms, CheckInDate, CheckOutDate, amount, totalDays);            
            setError("Please Fill In All Fields.");
            return;
        }
    
        setError('');
        setGood('');
        setLoading(true);
    
        try {
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName, lastName, phone, email, currency, roomType, roomName, rooms, CheckInDate, CheckOutDate, amount, totalDays })
            });
    
            const data = await res.json();
    
            if (res.ok) {
                window.location.href = data.link;
            } else {
                setError(data.message || "An error occurred");
            }
        } catch (error) {
            console.error("Error during payment:", error);
            setError("An error occurred while processing your request.");
        } finally {
            setLoading(false); 
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
        <div className="newguest flex">
            <AdminSidebar/>
            <div className="new mt-16 ml-[5em] md:ml-[17em]">
                <div className="md:flex">
                    <Link to='/guestorders'>
                        <div className="flex text-xl font-semibold mx-2 text-[tomato]">
                            <h1 className='px-1'>Guest Orders</h1>
                            <RxDoubleArrowLeft className='mt-1.5 font-bold'/>
                        </div>
                    </Link>
                    <h1 className='text-xl font-semibold mx-2'>New Guest Order</h1>
                </div>
                <div className="">
                    <div className="bg-[tomato] p-6 m-4 rounded-xl">
                        <div className="form">
                            <form action="" onSubmit={(e) => handlePayment(e)}>
                               <div className="md:flex">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>FirstName</label>
                                        <input type="text" name="firstName" id="" placeholder='Enter FirstName Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>LastName</label>
                                        <input type="text" name="" id="lastName" placeholder='Enter LastName Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                               </div>
                               <div className="md:flex">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Phone</label>
                                        <input type="number" name="phone" id="" placeholder='Enter Phone Number Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Email</label>
                                        <input type="email" name="email" id="" placeholder='Enter Email Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                               </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>CheckIn Date</label>
                                        <input type="date" name='CheckInDate' className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter CheckIn Date' min={today}/>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>CheckOut Date</label>
                                        <input type="date" name='CheckOutDate' className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter CheckOut Date'/>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Total Rooms</label>
                                        <input type="number" name='rooms' className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Total Rooms'/>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Total Days</label>
                                        <input type="number" name='totalDays' className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Total Days'/>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>RoomName</label>
                                        <select name="roomName" className='w-full rounded-lg my-1 p-2 outline-none' id="">
                                            <option value="">Select One RoomName Below</option>
                                            <option value="Standard Suite">Standard Suites</option>
                                            <option value="Junior Suites">Junior Suites</option>
                                            <option value="Presidential Suites">Presidential Suites</option>
                                            <option value="Penthouse Suites">Penthouse Suites</option>
                                            <option value="Honeymoon Suites">Honeymoon Suites</option>
                                            <option value="Bridal Suites">Bridal Suites</option>
                                        </select>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>RoomType</label>
                                        <select name="roomType" className='w-full rounded-lg my-1 p-2 outline-none' id="">
                                            <option value="">Select One RoomType Below</option>
                                            <option value="6731f7fe46118596de4cfc6d">Standard Suites</option>
                                            <option value="6731f9ca46118596de4cfc87">Junior Suites</option>
                                            <option value="6732029646118596de4cfca8">Presidential Suites</option>
                                            <option value="673205c046118596de4cfcb8">Penthouse Suites</option>
                                            <option value="673214a260e289ee48bb2065">Honeymoon Suites</option>
                                            <option value="67321b4ae8b75c39367350ad">Bridal Suites</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Amount</label>
                                        <input type="number" name="amount" id="" className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Amount Here' />
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Currency</label>
                                        <select name="currency" className='w-full rounded-lg my-1 p-2 outline-none' id="">
                                            <option value="USD">USD</option>
                                            <option value="NGN">NGN</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="btn text-center m-2">
                                    <button disabled={loadings} type='submit' className='bg-green-400 p-2 px-5 rounded-md text-white outline-none hover:bg-[#55ea55] hover:text-black hover:font-semibold'>{loadings ? "Booking" : "Book A Guest"}</button>
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

export default NewGuestOrder
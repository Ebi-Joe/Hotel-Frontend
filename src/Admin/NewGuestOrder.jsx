import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'
import { RxDoubleArrowLeft } from "react-icons/rx";

function NewGuestOrder() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [roomType, setRoomType] = useState('');
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState('');
    const [CheckInDate, setCheckInDate] = useState('');
    const [CheckOutDate, setCheckOutDate] = useState('');
    const [amount, setAmount] = useState('');
    const [totalDays, setTotalDays] = useState('');
    const [error, setError] = useState('');
    const [good, setGood] = useState();
    const [loading, setLoading] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !phone || !email || !currency || !roomType || !roomName || !rooms || !CheckInDate || !CheckOutDate || !amount || !totalDays) {
            setError("Please Fill In All Fields.")
        }
        setError('')
        setGood('')

        try {
            const res = await fetch("http://localhost:8000/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ firstName, lastName, phone, email, currency, roomType, roomName, rooms, CheckInDate, CheckOutDate, amount, totalDays })
            })
            const data = await res.json();
            if (res.ok) {
                window.location.href = data.link
                console.log(data.link);            
            } else if (data.message) {
                setError(data.message)
            }
        } catch (error) {
            console.log(error);            
        } finally {
            setLoading(false)
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
                            <form action="" onSubmit={handlePayment}>
                               <div className="md:flex">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>FirstName</label>
                                        <input type="text" onChange={(e) => {setFirstName(e.target.value)}} name="" id="" placeholder='Enter FirstName Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>LastName</label>
                                        <input type="text" onChange={(e) => {setLastName(e.target.value)}} name="" id="" placeholder='Enter LastName Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                               </div>
                               <div className="md:flex">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Phone</label>
                                        <input type="number" onChange={(e) => {setPhone(e.target.value)}} name="" id="" placeholder='Enter Phone Number Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Email</label>
                                        <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="" id="" placeholder='Enter Email Here' className='w-full rounded-lg my-1 p-2 outline-none'/>
                                    </div>
                               </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>CheckIn Date</label>
                                        <input type="date" onChange={(e) => {setCheckInDate(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter CheckIn Date'/>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>CheckOut Date</label>
                                        <input type="date" onChange={(e) => {setCheckOutDate(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter CheckOut Date'/>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Total Rooms</label>
                                        <input type="number" onChange={(e) => {setRooms(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Total Rooms'/>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Total Days</label>
                                        <input type="text" onChange={(e) => {setTotalDays(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Total Days'/>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>RoomType</label>
                                        <select name="" value={roomType} onChange={(e) => {setRoomType(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' id="">
                                            <option value="">Select One RoomType Below</option>
                                            <option value="Standard Suite">Standard Suites</option>
                                            <option value="Junior Suites">Junior Suites</option>
                                            <option value="Presidential Suites">Presidential Suites</option>
                                            <option value="Penthouse Suites">Penthouse Suites</option>
                                            <option value="Honeymoon Suites">Honeymoon Suites</option>
                                            <option value="Bridal Suites">Bridal Suites</option>
                                        </select>
                                    </div>
                                    <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Amount</label>
                                        <input onChange={(e) => setAmount(e.target.value)} type="number" name="" id="" className='w-full rounded-lg my-1 p-2 outline-none' placeholder='Enter Amount Here' />
                                    </div>
                                </div>
                                <div className="m-2 md:w-[24.4vw]">
                                        <label htmlFor="" className='text-white font-bold text-xl'>Currency</label>
                                        <select name="" onChange={(e) => {setCurrency(e.target.value)}} className='w-full rounded-lg my-1 p-2 outline-none' id="">
                                            <option value="USD">USD</option>
                                            <option value="NGN">NGN</option>
                                        </select>
                                    </div>
                                <div className="btn text-center m-2">
                                    <button disabled={loading} type='submit' className='bg-green-400 p-2 px-5 rounded-md text-white outline-none hover:bg-[#55ea55] hover:text-black hover:font-semibold'>{loading ? "Booking" : "Book A Guest"}</button>
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
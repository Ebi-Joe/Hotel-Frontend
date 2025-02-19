import React, { useState } from 'react'
import Header from '../Header'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { IoLogoPaypal } from "react-icons/io5";
import { SiAmericanexpress } from "react-icons/si";
import { MdAutoDelete } from "react-icons/md";
import Modal from '../shared/Modal';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [error, setError] = useState('');
    const [good, setGood] = useState();
    const [agree, setAgree] = useState(false)
    const [loading, setLoading] = useState(false);
    const isAuthenticated = localStorage.getItem('auth-token');
    const location = useLocation();
    const navigate = useNavigate()

    const bookingsData = JSON.parse(localStorage.getItem("Booking Info")) || [];
    const bookings = Array.isArray(bookingsData) ? bookingsData : [bookingsData];
    
    const deleteHandler = (_id)=>{
        setOpen(true)
        setDeleteId(_id)
    }
    const deleteClick = ()=>{
        const updatedBookings = bookings.filter(item => item._id !== deleteId)
        localStorage.setItem("Booking Info", JSON.stringify(updatedBookings));
        setOpen(false)
        setGood('Booking Deleted Successfully');
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!agree) {
            setError("You must agree to the privacy terms before proceeding.");
            return;
        }
        
        if (!isAuthenticated) {
            navigate(`/login?redirect=${location.pathname}`);
            return;
        }
    
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const currency = e.target.elements.currency.value;
        const roomType = e.target.elements.roomType.value;
        const roomName = e.target.elements.roomName.value;
        const rooms = e.target.elements.rooms.value;
        const CheckInDate = e.target.elements.CheckInDate.value;
        const CheckInTime = e.target.elements.CheckInTime.value;
        const CheckOutDate = e.target.elements.CheckOutDate.value;
        const CheckOutTime = e.target.elements.CheckOutTime.value;
        const amount = e.target.elements.amount.value;
        const totalDays = e.target.elements.totalDays.value;
    
        if (!firstName || !lastName || !phone || !email || !currency || !roomType || !roomName || !rooms || !CheckInDate || !CheckInTime || !CheckOutDate || !CheckOutTime || !amount || !totalDays) {
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
                body: JSON.stringify({ firstName, lastName, phone, email, currency, roomType, roomName, rooms, CheckInDate, CheckInTime, CheckOutDate, CheckOutTime, amount, totalDays })
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
    };
  return (
    <>
         <div className="flex items-center justify-center">
            {error && <div className="error-message fixed text-white bg-red-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
        <Header/>
        <div className="pt-24 p-8 max-w-7xl mx-auto">
            <div className="py-2">
                <h1 className='text-4xl font-semibold text-[#6cd234]'>Booking Page</h1>
            </div>
            <form action="" onSubmit={(e) => handlePayment(e)}>
                <div className="grid md:grid-flow-col gap-4">
                    <div className="border-[1px] h-fit p-4 my-2 lg:w-[50vw]">
                        <h1 className='text-3xl font-semibold'>Contact Info</h1>
                        <div className="">
                            <div className="m-1">
                                <input className='border-2 p-2 w-full outline-[#6cd234]' name='firstName' type="text" placeholder='First Name *' required/>
                            </div>
                            <div className="m-1 my-4">
                                <input className='border-2 p-2 w-full outline-[#6cd234]' name='lastName' type="text" placeholder='Last Name *' required/>
                            </div>
                            <div className="m-1 my-4">
                                <input className='border-2 p-2 w-full outline-[#6cd234]' name='phone' type="number" placeholder='Phone Number *' required/>
                            </div>
                            <div className="m-1 my-4">
                                <input className='border-2 p-2 w-full outline-[#6cd234]' name='currency' type="text" placeholder='Currency *' required/>
                            </div>
                            <div className="m-1">
                                <input className='border-2 p-2 w-full outline-[#6cd234]' name='email' type="text" placeholder='Email Address *' required/>
                                <label htmlFor="" className='text-xs font-semibold'>This is the email we will send your confirmation to*</label>
                            </div>
                        </div>
                        <div className="pt-6">
                            <h1 className='text-3xl font-semibold'>Payments</h1>
                            <div className="flex text-4xl gap-2 py-2">
                                <FaCcVisa className='text-blue-400' />
                                <FaCcMastercard className='text-red-400' />
                                <IoLogoPaypal className='text-blue-700' />
                                <SiAmericanexpress className='text-slate-500' />
                            </div>
                            {bookings.length === 0 ? (
                                <p className='hidden font-bold text-2xl text-red-500 uppercase text-center pt-8'>No bookings yet!!....</p>
                                ) : (
                                bookings.map((items, index) => (
                                    <div key={index} >
                                        <input type="hidden" name='amount' value={items.totalPrice} />
                                        <input type="hidden" name='roomType' value={items.roomType} />
                                        <input type="hidden" name='roomName' value={items.roomName} />
                                        <input type="hidden" name='rooms' value={items.rooms} />
                                        <input type="hidden" name='totalDays' value={items.days} />
                                        <input type="hidden" name='CheckInDate' value={items.checkInDate} />
                                        <input type="hidden" name='CheckInDate' value={items.checkInTime} />
                                        <input type="hidden" name='CheckOutDate' value={items.checkOutDate} />
                                        <input type="hidden" name='CheckOutDate' value={items.checkOutTime} />
                                    </div>  
                                ))
                            )}
                        </div>
                    </div>
                    <div className="grid order-first md:order-none">
                        {bookings.length === 0 ? (
                            <p className='font-bold text-2xl text-red-500 uppercase text-center pt-8'>No bookings yet!!....</p>
                            ) : (
                            bookings.map((items, index) => (
                                <div key={index} className="md:w-[40vw] lg:w-[30vw] h-fit border-[1px] p-4 my-2">
                                    <div className="">
                                        <h1 className='text-2xl py-2 font-semibold'>Your Booking List: 1 Item</h1>
                                        <h1 className='text-lg font-medium'>Total USD {items.totalPrice}.00</h1>
                                        <h1 className='py-1.5'>Including taxes and fees</h1>
                                    </div>
                                    <h1 className='hidden'>{items.roomType}</h1>
                                    <div className="border-[1.5px] border-[#737373] p-3 px-4 my-2">
                                        <div className="flex place-content-between text-[16px] font-medium py-1">
                                            <h1 className='border-b-[1.4px] border-[#171717]'>{items.roomName}</h1>
                                            <h1>USD {items.price}.00</h1>
                                        </div>
                                        <div className="text-[16px] font-semibold flex place-content-between">
                                            <h1>Best Available Rate</h1>
                                            <h1>USD {items.prices}.00</h1>
                                        </div>  
                                        <div className="text-[16px]">
                                            <h1 className='text-[.9rem] py-1'><span className='font-bold text-blue-600 underline'>{items.days}</span> Night stay for <span className='font-bold underline text-blue-600' >{items.rooms}</span> Rooms</h1>
                                        </div>
                                        <div className="text-[16px] py-1.5 flex place-content-between">
                                            <h1>Taxes and Fees</h1>
                                            <h1 className='font-semibold'>USD {items.tax}.00</h1>
                                        </div>
                                        <div className="text-[16px] flex place-content-between">
                                            <h1>CheckIn Date</h1>
                                            <h1>CheckOut Date</h1>
                                        </div>
                                        <div className="text-[16px] font-semibold flex place-content-between">
                                            <h1>{items.checkInDate}</h1>
                                            <h1>{items.checkOutDate}</h1>
                                        </div>
                                        <div className="pb-1">
                                            <h1>{items.occupancy}</h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-xl font-bold place-content-between">
                                            <h1>Total</h1>
                                            <h1>USD {items.totalPrice}.00</h1>
                                        </div>
                                        <div className="">
                                            <h1>Including Taxes and Fees</h1>
                                        </div>
                                        <div className="">
                                            <MdAutoDelete onClick={()=>{deleteHandler(items._id)}} className='text-3xl hover:cursor-pointer'/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="policies border-[1px] my-2 p-3 lg:w-[50vw]">
                    <h1 className='text-3xl py-2 font-bold'>Policies:</h1>
                    <div className="py-2">
                        {bookings.length === 0 ? (
                            <p className='font-bold text-2xl text-red-500 uppercase text-center'>No bookings yet!!....</p>
                            ) : (
                                bookings.map((items, index) => (
                                    <div className="flex">
                                        <div className="px-4">
                                            <h1 className='font-bold text-xl'>Check-In</h1>
                                            <h1>{items.checkInTime}</h1>
                                        </div>
                                        <div className="px-4">
                                            <h1 className='font-bold text-xl'>Check-Out</h1>
                                            <h1>{items.checkOutTime}</h1>
                                        </div>
                                    </div>
                                ))
                        )}
                        <div className="p-4">
                            <div className="py-1">
                                <h1 className='font-semibold'>Guarantee Policy</h1>
                                <h1>Standard Guarantee Policy - please take note of the hotel's terms & conditions for payment arrangements.</h1>
                            </div>
                            <div className="py-1">
                                <h1 className='font-semibold'>Cancel Policy</h1>
                                <h1>Reservations can be cancelled for free before 4pm on the day of arrival.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="acknowledge border-[1px] p-5 lg:w-[50vw]">
                    <h1 className='text-2xl font-bold py-1'>Acknowledgement</h1>
                    <h1 className='font-semibold py-1'>By completing this booking, I agree with the Booking Conditions</h1>
                    <div className="flex font-semibold text-[15px] py-2">
                            <input  type="checkbox"  id="privacyAgreement"  checked={agree}  onChange={(e) => setAgree(e.target.checked)}  required />
                            <label htmlFor="privacyAgreement" className='px-1'>* I agree with the privacy terms.</label>
                        </div>
                </div>
                <div className="btn text-center m-8">
                    <button disabled={loading} className='bg-[#6cd234] font-semibold p-3 px-6 rounded'>{loading ? "Confirming" : "Confirm Booking"}</button>
                </div>
            </form>
        </div>
        {
            open &&
            <Modal>
                <div className="group select-none flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                <div className="">
                    <div className="text-center p-3 flex-auto justify-center">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="group-hover:animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            clipRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            fillRule="evenodd"
                            ></path>
                        </svg>
                        <h2 className="text-xl font-bold py-4 text-gray-200">Are You Sure You Want To Proceed?</h2>
                        <p className="font-bold text-sm text-gray-500 px-2">This Action Delete's Room From The Booking List, And Cannot Be Undone!!!!</p>
                    </div>
                    <div className="p-2 mt-2 text-center space-x-1 md:block">
                        <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300" onClick={()=>{{setOpen(false)}}}>
                            Cancel
                        </button>
                        <button className="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300" onClick={deleteClick}>
                            Confirm
                        </button>
                    </div>
                </div>
                </div>

            </Modal>
        }
    </>
  )
}

export default BookingPage
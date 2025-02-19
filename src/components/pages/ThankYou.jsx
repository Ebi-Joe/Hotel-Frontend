import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HotelContext from '../../context/HotelContext';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

function ThankYou() {
  const { createBooking, booking, isAuthenticated } = useContext(HotelContext);
  const [searchParams] = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const [isProcessed, setIsProcessed] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  useEffect(() => {
    if (transaction_id && tx_ref && !isProcessed) {
      createBooking(tx_ref, transaction_id);
      setIsProcessed(true);
      localStorage.setItem(`bookingProcessed_${tx_ref}`, 'true');
    }
  }, [transaction_id, tx_ref, createBooking, isProcessed]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center animate-fade-in">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-500 p-4 rounded-full mb-4 shadow-lg">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-600">Thank You, {booking?.firstName}!</h1>
            <p className="text-gray-600 mt-2">Your booking for {booking?.roomName} has been successfully processed.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-6 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Booking Details</h2>
            <p><span className="font-medium">Transaction Reference:</span> {tx_ref}</p>
            <p><span className="font-medium">Transaction ID:</span> {transaction_id}</p>
            <p><span className="font-medium">Check-in Date:</span> {booking?.CheckInDate}</p>
            <p><span className="font-medium">Check-in Date:</span> {booking?.CheckInTime}</p>
            <p><span className="font-medium">Check-out Date:</span> {booking?.CheckOutDate}</p>
            <p><span className="font-medium">Check-out Date:</span> {booking?.CheckOutTime}</p>
            <p><span className="font-medium">Total Days:</span> {booking?.totalDays}</p>
            <p><span className="font-medium">Rooms Booked:</span> {booking?.rooms}</p>
            <p><span className="font-medium">Total Amount:</span> ${booking?.amount}</p>
          </div>

          <div className="md:flex">
            <Link to="/">
              <button type="button" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 m-2 rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6-6l6 6-6 6"></path>
                </svg>
                Go to Home
              </button>
            </Link>
            <Link to="/testimonials">
              <button type="button" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 m-2 rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6-6l6 6-6 6"></path>
                </svg>
                Send A Review
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThankYou;

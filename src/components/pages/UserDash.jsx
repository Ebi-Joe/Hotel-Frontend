import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import { MdVerified } from 'react-icons/md';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import HotelContext from '../../context/HotelContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext from '../../context/AuthContext';

function UserDash() {
  const { user, loading, isAuthenticated } = useContext(HotelContext);
  const [state, dispatch] = useContext(AuthContext);
  const { deleteItem } = useLocalStorage('auth-token');
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 4;

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  const logOut = (e) => {
    e.preventDefault();
    dispatch({ type: "setToken", payload: null });
    deleteItem("auth-token");
    navigate("/login");
    localStorage.clear();
  };

  useEffect(() => {
    if (user && user.data && user.data.email) {
      fetchBookings(user.data.email);
    }
  }, [user]);

  const fetchBookings = async (email) => {
    try {
      const response = await fetch('https://hotel-backend-itqc.onrender.com/api/getUserBookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setBookings(data.bookings);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    } finally {
      setBookingLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Header />
      <div className="pt-20 rounded-2xl shadow-2xl p-5 md:p-20 mx-3">
        <div className="flex justify-between">
          <h1 className='font-semibold font-serif text-2xl p-2'>Your Details</h1>
          <Link to='/'><h1 className='font-semibold bg-[#6dc234] p-2 px-5 w-fit rounded-lg'>Go To Home</h1></Link>
        </div>
        <hr className='mt-2' />

        <div className="mt-7">
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>First Name:</h1><h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span> : user.data.firstName}</h1></div>
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>Last Name:</h1><h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span> : user.data.lastName}</h1></div>
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>Email:</h1><h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span> : user.data.email}</h1></div>
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>Role:</h1><h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span> : user.data.role}</h1></div>
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>Verification Status:</h1><h1 className='p-0.5 flex'><MdVerified className='text-[#6dc234] text-2xl' /></h1></div>
          <div className="flex py-1"><h1 className='font-semibold px-2 text-lg'>Date Joined:</h1><h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span> : new Date(user.data.createdAt).toDateString()}</h1></div>

          <div>
            <button onClick={logOut} className='bg-[#6dc234] hover:bg-red-400 mx-2 p-2 px-6 rounded-lg font-semibold'>Log Out</button>
            <Link to="/forgotPassword"><button className='bg-[#6dc234] hover:bg-yellow-400 mx-2 p-2 px-6 rounded-lg font-semibold'>Change Password</button></Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className='font-semibold text-xl'>Your Bookings:</h2>
          {bookingLoading ? (
              <p className="animate-pulse mt-4">Loading your bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="mt-4 text-gray-600">You have no bookings yet.</p>
            ) : (
            <>
              <div className="mt-4 space-y-4">
                {currentBookings.map((booking) => (
                  <div key={booking._id} className="border p-4 rounded-lg shadow-md bg-gray-100">
                    <h3 className='font-semibold text-lg'>{booking.roomName} ({booking.roomType})</h3>
                    <p><strong>Booking ID:</strong> {booking._id}</p>
                    <p><strong>Check-In Date:</strong> {new Date(booking.CheckInDate).toDateString()}</p>
                    <p><strong>Check-In Time:</strong> {booking.CheckInTime}</p>
                    <p><strong>Check-Out Date:</strong> {new Date(booking.CheckOutDate).toDateString()}</p>
                    <p><strong>Check-Out Time:</strong> {booking.CheckOutTime}</p>
                    <p><strong>Total Days:</strong> {booking.totalDays}</p>
                    <p><strong>Rooms:</strong> {booking.rooms}</p>
                    <p><strong>Amount Paid:</strong> {booking.amount} {booking.currency || 'NGN'}</p>
                    <p><strong>Status:</strong> {booking.status}</p>
                    <p><strong>Completed On:</strong> {new Date(booking.createdAt).toDateString()}</p>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-6 space-x-4">
                <button 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 1} 
                  className={`px-4 py-2 rounded-lg font-semibold ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#6dc234] hover:bg-[#73cd37]'}`}
                >
                  Previous
                </button>
                <span className='font-semibold'>Page {currentPage} of {totalPages}</span>
                <button 
                  onClick={handleNextPage} 
                  disabled={currentPage === totalPages} 
                  className={`px-4 py-2 rounded-lg font-semibold ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#6dc234] hover:bg-[#73cd37]'}`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UserDash;
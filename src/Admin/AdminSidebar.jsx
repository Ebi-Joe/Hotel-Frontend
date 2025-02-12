import React, { useContext, useState } from 'react';
import { MdContactPage, MdDashboard } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { FaList } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { GiDoor } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import HotelContext from '../context/HotelContext';
import AuthContext from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';

function AdminSidebar() {
    const { isAuthenticated, showHide, user, loading } = useContext(HotelContext);
    const [state, dispatch] = useContext(AuthContext);
    const { deleteItem } = useLocalStorage("auth-token");
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const logOut = (e) => {
        e.preventDefault();
        dispatch({ type: "setToken", payload: null });
        deleteItem("auth-token");
        navigate("/login");
        showHide("Success", "You Have Been Logged Out You Can Access Other Free Areas Of the WebPage");
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleBackdropClick = () => {
        setIsSidebarOpen(false);
    }

    return (
        <>
        {isSidebarOpen && (
                <div 
                    className="fixed bg-black opacity-50 z-10" 
                    onClick={handleBackdropClick}
                />
            )}
            <button className="md:hidden bg-[#e6d4d4] h-full text-white fixed" onClick={toggleSidebar}>
                {isSidebarOpen ? <GoSidebarExpand className='text-2xl mx-1'  /> : <GoSidebarCollapse className='text-4xl text-[tomato] mx-3 mt-[0.1em]' />}
                <ul className='pt-10 text-lg'>
                    <Link to='/hotelControllerDash'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdDashboard className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/contacts'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdContactPage className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/guestList'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <TbListDetails className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/guestorders'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <FaList className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/roomTypes'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <BiSolidCategoryAlt className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/room'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <GiDoor className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/concierge'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <GrUserWorker className='text-2xl mx-1' />
                        </li>
                    </Link>
                    <Link to='/review'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdRateReview className='text-2xl mx-1 mt-1' />
                        </li>
                    </Link>
                    <Link>
                        <li onClick={logOut} className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <BiLogOut className='text-2xl mx-1' />
                        </li>
                    </Link>
                </ul>
            </button>

            <div className={`sidebar fixed z-50 h-screen bg-[#e6d4d4] flex-0 w-[250px] mr-4 shadow-2xl transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <button className="md:hidden p-2 bg-[#e6d4d4] text-[tomato] text-center" onClick={toggleSidebar}>
                    {isSidebarOpen ? <GoSidebarExpand className='text-4xl mx-3 mt-[0.5em]' /> : <GoSidebarCollapse className='text-2xl mx-1' />}
                </button>
                {isAuthenticated ? (
                    <div className="tx pt-[1em] md:pt-[5em]">
                        <h1 className='px-4 md:flex font-bold text-2xl text-[black] justify-center'>{loading ? <span className='animate-bounce'>...</span>: (user.data.lastName)}</h1>
                        <h2 className='px-4 md:flex text-lg text-[gray] justify-center py-2'>{loading ? <span className='animate-bounce'>...</span>: (user.data.email)}</h2>
                    </div>
                ) : (
                    <div className="tx pt-[1em]">
                        <h1 className='px-4 md:flex font-bold text-2xl text-[black] justify-center'>Josiah</h1>
                        <h2 className='px-4 md:flex text-lg text-[gray] justify-center py-2'>ebijoe911@gmail.com</h2>
                    </div>
                )}
                <ul className='md:pt-10 text-lg'>
                    <Link to='/hotelControllerDash'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdDashboard className='text-2xl mx-1' />
                            <h1 className=' md:flex px-2 font-bold'>Dashboard</h1>
                        </li>
                    </Link>
                    <Link to='/contacts'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdContactPage className='text-2xl mx-1' />
                            <h1 className=' md:flex px-2 font-bold'>Contacts</h1>
                        </li>
                    </Link>
                    <Link to='/guestList'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <TbListDetails className='text-2xl mx-1' />
                            <h1 className=' md:flex font-bold px-2'>Users List</h1>
                        </li>
                    </Link>
                    <Link to='/guestorders'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <FaList className='text-2xl mx-1' />
                            <h1 className=" md:flex font-bold px-2">Guest Bookings</h1>
                        </li>
                    </Link>
                    <Link to='/roomTypes'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <BiSolidCategoryAlt className='text-2xl mx-1' />
                            <h1 className=' md:flex font-bold px-2'>RoomTypes</h1>
                        </li>
                    </Link>
                    <Link to='/room'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <GiDoor className='text-2xl mx-1' />
                            <h1 className=' md:flex font-bold px-2'>Rooms</h1>
                        </li>
                    </Link>
                    <Link to='/concierge'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <GrUserWorker className='text-2xl mx-1' />
                            <h1 className=' md:flex font-bold px-2'>Concierge</h1>
                        </li>
                    </Link>
                    <Link to='/review'>
                        <li className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <MdRateReview className='text-2xl mx-1 mt-1' />
                            <h1 className=' md:flex font-bold px-2'>Reviews</h1>
                        </li>
                    </Link>
                    <Link>
                        <li onClick={logOut} className='flex text-[gray] px-4 md:px-8 py-4 md:py-2 hover:bg-[white] hover:text-[black]'>
                            <BiLogOut className='text-2xl mx-1' />
                            <h1 className='md:flex font-bold px-2'>Log Out</h1>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default AdminSidebar;
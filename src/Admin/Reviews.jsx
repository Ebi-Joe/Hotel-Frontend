import React, { useContext } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link, Navigate } from 'react-router-dom'
import HotelContext from '../context/HotelContext'
import { FaStar, FaStarHalf } from "react-icons/fa";
import Loader from '../components/Loader';

function Reviews() {
    const { reviews, isAuthenticated, user, loading } = useContext(HotelContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><Loader/></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/unauthorized' />
    }

    if (user && user.data && user.data.role !== 'Admin') {
        return <Navigate to='/unauthorized' />;
    }

    const Rating = ({ rating }) => {
        const maxRating = 5;
        const ratingArray = Array(maxRating).fill();

        return (
        <div className="flex text-sm text-yellow-500 p-1">
            {ratingArray.map(( items, index) => {
            if (rating >= index + 1) {
                return <FaStar key={index} />;
            } else if (rating >= index + 0.1) {
                return <FaStarHalf key={index} />;
            } else {
                return <FaStar key={index} className="text-gray-300" />;
            }
            })}
        </div>
        );
    };
  return (
    <>
        <div className="flex bg-slate-100">
            <AdminSidebar/>
            <div className="review mt-12 ml-[5em] md:ml-[17em] max-w-5xl mx-auto">
                <Link to='/newReview'>
                    <div className="btn flex justify-end m-2">
                        <button className='bg-[tomato] text-white text-sm font-bold p-2 rounded'>Add New Review</button>
                    </div>
                </Link>
                <div className="">
                    {reviews.map((items, index) => (
                        <div key={index} className="bg-white m-4 p-6 border-2 rounded-lg">
                            <div className="mx-2">
                                <h2 className='text-2xl'>{items.name}</h2>
                                <h2 className='font-semibold text-green-700'>#RV-{items._id}</h2>
                            </div>
                            <div className="mx-2">
                                <h2 className='text-[1.4rem] font-semibold py-1'>{items.point}</h2>
                                <h2 className='text-[0.85rem] font-medium text-[#6e6d6d] py-1'>{items.description}</h2>
                                <div className="btn my-2">
                                    <button className='bg-[#e1e0e0] hover:bg-[grey] px-4 text-[0.84rem] m-1 p-2 rounded-md'>Great Price</button>
                                    <button className='bg-[#e1e0e0] hover:bg-[grey] px-4 text-[0.84rem] m-1 p-2 rounded-md'>Recomended</button>
                                    <button className='bg-[#e1e0e0] hover:bg-[grey] px-4 text-[0.84rem] m-1 p-2 rounded-md'>Best Price</button>
                                </div>
                            </div>
                            <div className="mx-2">
                                <h2 className='text-2xl'>{items.rating}</h2>
                                <Rating rating={items.rating} />
                                <h2 className='text-[1.4rem] font-semibold py-1'>{items.date}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Reviews
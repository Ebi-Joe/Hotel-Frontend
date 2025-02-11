import React, { useContext } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar'
import HotelContext from '../context/HotelContext'
import { Link } from 'react-router-dom';

function RoomType() {
    const { roomType } = useContext(HotelContext)
    // const Rating = ({ rating }) => {
    //     const maxRating = 5;
    //     const ratingArray = Array(maxRating).fill();

    //     return (
    //     <div className="flex text-sm text-yellow-500 p-1">
    //         {ratingArray.map(( items, index) => {
    //         if (rating >= index + 1) {
    //             return <FaStar key={index} />;
    //         } else if (rating >= index + 0.1) {
    //             return <FaStarHalf key={index} />;
    //         } else {
    //             return <FaStar key={index} className="text-gray-300" />;
    //         }
    //         })}
    //     </div>
    //     );
    // };

  return (
    <>
        <div className="flex bg-slate-100">
            <AdminSidebar />
            <div className="rooms mt-16 ml-[5em] md:ml-[17em]">
              <div className="btn flex justify-end py-2 px-4">
                <Link to=''>
                  <button className='bg-[tomato] text-white text-sm font-semibold py-2 px-3 rounded'>Add New RoomType</button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {roomType.map((items, index) => (
                  <div className="border-2 border-gray-300 rounded-xl m-2">
                    <div key={index} className="m-2 relative">
                      <img src={items.images[0].img} alt="" className='rounded-md object-cover h-[47vh] brightness-75'/>
                      <h1 className='name text-white font-medium absolute top-[59%] px-5 capitalize'>{items.name}</h1>

                      <button className={`absolute top-[50%] mx-5 p-1 px-3 text-white text-sm m-1 rounded ${items.availabilityStatus === "Available" ? "bg-green-400" : "bg-red-400" }`}>
                        {items.availabilityStatus === "Available" ? "Available" : "Booked"}
                      </button>
{/* 
                      <div className="flex justify-between py-2 text-sm font-medium">
                        <h1>Ranking</h1>
                        <div className="flex">
                          <h1>{items.rating}</h1>
                          <Rating rating={items.rating} />
                        </div>
                      </div> */}

                      <div className="flex justify-between py-2 text-sm font-medium border-b-2 border-slate-300">
                        <h1 className='font-bold'>Rooms</h1>
                        <h1>{items.roomsNo}</h1>
                      </div>

                      <div className="flex justify-between py-2 text-sm font-medium border-b-2 border-slate-300">
                        <h1 className='font-bold'>Available Rooms</h1>
                        <h1>{items.availableRoomsNo}</h1>
                      </div>

                      <div className="flex justify-between py-2 text-sm font-medium">
                        <h1 className='font-bold'>Bed Type</h1>
                        <h1>{items.bedSize}</h1>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </>
  )
}

export default RoomType
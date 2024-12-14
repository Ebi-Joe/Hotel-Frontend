import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header';

function Availability() {
  const location = useLocation();
  const availableRoomTypes = location.state?.availableRoomTypes || [];

  return (
    <>
      <div className="">
        <Header />
        <div className="img flex relative justify-center text-center items-center">
          <img src="/img/Availability.jpg" alt="" className='brightness-75 h-[63vh] lg:h-[90vh] w-screen object-cover' />
          <h1 className='absolute text-[white] text-3xl md:text-5xl lg:text-6xl'>Available Rooms</h1>
        </div>

        <div className="available-rooms py-8 max-w-3xl lg:max-w-5xl mx-auto">
          <h1 className='text-center font-bold text-4xl py-6 uppercase'>Rooms Available At The Moment</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-lg md:max-w-6xl mx-auto">
            {availableRoomTypes.length > 0 ? (
              availableRoomTypes.map((roomInfo, index) => (
                <div key={index} className="item rounded m-4 bg-slate-100">
                  <img src={roomInfo.roomType.images[0].img} alt="" className='h-[15em] w-full object-cover' />
                  <div className="card p-6 shadow-xl">
                    <h2 className="text-xl font-bold uppercase py-2">{roomInfo.roomType.name}</h2>
                    <p className="py-3 text-sm">{roomInfo.roomType.info}</p>
                    <Link to={`/roomGallery/${roomInfo.roomType._id}`}>
                      <button className='uppercase bg-black text-white text-xs px-4 py-2 hover:bg-[#6cd234]'>{`Book From ${roomInfo.roomType.price}$`}</button>
                    </Link>
                    <hr className='my-3 w-full border-[silver]' />
                    <div className="lst flex place-content-between text-slate-500">
                      <div className="icn">
                        <i className="fa-solid fa-ban-smoking px-1"></i>
                        <i className="fa-solid fa-sailboat px-1"></i>
                        <i className="fa-solid fa-martini-glass-citrus px-1"></i>
                        <i className="fa-solid fa-utensils px-1"></i>
                      </div>
                      <Link to={`/roomGallery/${roomInfo.roomType._id}`}>
                        <h6 className='uppercase'>Full Info</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              ) : (
                <p className="text-center text-lg">No available rooms at the moment.</p>
              )}
            </div>
        </div>
      </div>
    </>
  );
}

export default Availability;
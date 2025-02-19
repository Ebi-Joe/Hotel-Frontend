import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Elegant1 from '../Elegant1'
import Serve from '../Serve'
import HotelContext from '../../context/HotelContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

function RoomDetails() {
    const { roomType } = useContext(HotelContext)
    const params = useParams()
    const showDetails = params.id
    const navigate = useNavigate();
    const roomItems = roomType.find((items) => items._id === showDetails)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [checkInDate, setCheckInDate] = useState('')
    const [checkInTime, setCheckInTime] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [checkOutTime, setCheckOutTime] = useState('')
    const [rooms, setNumberOfRooms] = useState(1);
    const [days, setDays] = useState()
    const [selectedImages, setSelectedImages] = useState(roomItems?.images?.[0].img)
    const [error, setError] = useState('')

    useEffect(() => {
        setSelectedImages(roomItems?.images?.[0].img)
    }, [roomItems])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const today = new Date().toISOString().split("T")[0]

    const calculateDays = () => {
        const checkIn = new Date(checkInDate)
        const checkOut = new Date(checkOutDate)
        const differenceInDays = (checkOut - checkIn) / (24 * 60 * 60 *1000)
        setDays(differenceInDays)        
        console.log(differenceInDays);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkInDate || !checkOutDate || !rooms) {
            setError('Please fill in all fields.');
            return;
        }
        
        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            setError('End date must be after start date.');
            return;
        }

        const existingBooking = JSON.parse(localStorage.getItem("Booking Info"));
        if (existingBooking && (Array.isArray(existingBooking) ? existingBooking.length > 0 : true)) {
            alert(`You can only have one booking at a time, please remove the current booking or make payments to proceed.`);
            navigate('/bookingPage');
            return;
        }

        const taxRate = 0.075;
        const prices = roomItems.price * days * rooms;
        const tax = prices * taxRate;
        const totalPrice = prices + tax;
        setError('')

        const formatTime = (time) => {
            if (!time) return "";
            let [hour, minute] = time.split(":");
            hour = parseInt(hour, 10);
            let period = hour >= 12 ? "PM" : "AM";
            hour = hour % 12 || 12; // Convert 24-hour to 12-hour format
            return `${hour}:${minute} ${period}`;
        };
        
        const formattedCheckInTime = formatTime(checkInTime);
        const formattedCheckOutTime = formatTime(checkOutTime);

        const bookingInfo = {
            roomType: roomItems._id,
            roomName: roomItems.name,
            price: roomItems.price,
            occupancy: roomItems.occupancy,
            checkInDate,
            checkInTime: formattedCheckInTime,
            checkOutDate,
            checkOutTime: formattedCheckOutTime,
            rooms,
            days: days,
            tax: tax,
            prices: prices,
            totalPrice: totalPrice
        };
        localStorage.setItem("Booking Info", JSON.stringify(bookingInfo))
        navigate('/bookingPage')
    }

  return (
    <>
        <Header/>
        <div className="banner">
            <div className="flex relative justify-center items-center">
                <img src="/img/rooms.jpg" alt="" className='h-[63vh] lg:h-full w-screen object-cover' />
                <h1 className='absolute text-2xl md:text-5xl lg:text-7xl text-white'>Rooms Gallery</h1>
            </div>
        </div>
        <Elegant1/>
        <div className="max-w-5xl mx-auto py-10 md:flex flex-none">            
            <div className="mx-3">
                <div className="mb-4">
                    <img src={selectedImages} className='h-[25em] w-full object-cover' alt="" />
                </div>
                <div className="grid grid-cols-3 gap-3 rounded">
                    {roomItems?.images.map((items, index )=> (
                        <div key={index} className="">
                            <img src={items.img} onClick={() => setSelectedImages(items.img)} alt="" className='h-[9rem] w-full object-cover' />
                        </div>
                    ))}
                </div>
                <div className="one">
                    <div className="">
                        <h1 className='py-2 text-3xl font-semibold'>Description</h1>
                        <h1 className='py-2 text-sm text-gray-500'>{roomItems?.description}</h1>
                    </div>
                    <div className="my-4">
                        <h1 className='text-3xl font-semibold py-4'>Overview</h1>
                        <div className="grid md:grid-cols-2">
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Room size:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.roomSize}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Bed size:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.bedSize}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Occupancy:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.occupancy}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Location:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.location}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>View:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.view}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Room service:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.roomService}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Smoking:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.smoking}</h1>
                            </div>
                            <div className="flex py-1">
                                <h1 className='font-semibold px-1'>Swimming pool:</h1>
                                <h1 className='text-gray-500 px-1'>{roomItems?.swimmingPool}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-3xl font-semibold py-4'>Features</h1>
                        <h1 className='text-gray-500 text-sm pb-12'>{roomItems?.features}</h1>
                    </div>
                </div>
            </div>
            <div className="two bg-black mx-2 h-fit p-3">
                <div className="mini md:w-[20vw]">
                    <form onSubmit={handleSubmit} action="">
                        {error && <div className="error-message text-center text-white bg-red-500 m-4 font-semibold p-2">{error}</div>}
                        <div className="in m-4">
                            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} name="" id="" className='w-full  border-[1px] border-gray-600 p-2' min={today}/>
                        </div>
                        <div className="in m-4">
                            <input type="time" value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)} name="" id="" className='w-full  border-[1px] border-gray-600 p-2' min={today}/>
                        </div>
                        <div className="in m-4">
                            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} name="" id="" className='w-full border-[1px] border-gray-600 p-2'/>
                        </div>
                        <div className="in m-4">
                            <input type="time" value={checkOutTime} onChange={(e) => setCheckOutTime(e.target.value)} name="" id="" className='w-full  border-[1px] border-gray-600 p-2' min={today}/>
                        </div>
                        <div className="m-4">
                            <select min="1" name="" value={rooms} onChange={(e) => setNumberOfRooms(e.target.value)} placeholder='Adult' id="" className='uppercase text-sm w-full border-[1px] border-gray-600 p-2'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="btn m-4">
                            <button onClick={calculateDays} className='bg-[#6dc234] font-semibold w-full p-2 text-white uppercase text-sm hover:bg-[#343434]'>Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-16">
            {roomType.slice(currentIndex, currentIndex + 6).map((items, index) => (
                <div key={index} className="item rounded m-4 bg-slate-100">
                    <img src={items.images[0].img} alt="" className='h-[13em] w-full object-cover' />
                    <div className="card p-6 shadow-xl">
                        <h2 className="text-xl font-bold uppercase py-2">{items.name}</h2>
                        <p className="py-3 text-sm">{items.info}</p>
                        <Link to={`/roomGallery/${items.id}`}>
                            <button className='uppercase bg-black text-white text-xs px-4 py-2 hover:bg-[#6cd234]'>{`Book From ${items.price}$`}</button>
                        </Link>
                        <hr className='my-3 w-full border-[silver]' />
                        <div className="lst flex place-content-between text-slate-400 p-2d ">
                            <div className="icn">
                                <i className="fa-solid fa-ban-smoking px-1"></i>
                                <i className="fa-solid fa-sailboat px-1"></i>
                                <i className="fa-solid fa-martini-glass-citrus px-1"></i>
                                <i className="fa-solid fa-utensils px-1"></i>
                            </div>
                            <Link to={`/roomGallery/${items._id}`}>
                                <h6 className='uppercase'>Full Info</h6>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div> */}
        <Serve/>
        <Footer/>
    </>
  )
}

export default RoomDetails
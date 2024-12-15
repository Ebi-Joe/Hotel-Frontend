import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function rooms() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalRooms, setTotalRooms] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(true)
  const [roomType, setRoomType] = useState([]);
  const navigate = useNavigate()

  const today = new Date().toISOString().split("T")[0]

  const fetchRoomType = async () => {
    try {
        const response = await fetch("https://hotel-backend-itqc.onrender.com/api/getAll-roomType");
        const roomType = await response.json()
        setRoomType(roomType.data)
        setLoad(false)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchRoomType()
  })
  
  const availabilityHandler = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate || !totalRooms) {
      setError('Please fill in all fields.');
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      setError('End date must be after start date.');
      return;
    }
    setError('');
    setLoading(true)
    try {
      const res = await fetch("https://hotel-backend-itqc.onrender.com/api/checkAvailability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({startDate, endDate, totalRooms,})
      })
      const data = await res.json()
      if(res.ok){
        navigate("/availability", { state: { availableRoomTypes: data.data } });
      } else{
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
        <div className="rooms md:flex max-w-3xl lg:max-w-5xl m-auto py-24">
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-lg md:max-w-6xl mx-auto'>
          {load ? (
              <div className="flex justify-center items-center">
                  <div className="flex-col gap-4">
                      <div className="w-[10rem] h-[10rem] border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                          <div className="w-[10rem] h-[10rem] border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                      </div>
                      <h1 className='text-xl font-semibold'>Be Patient While Loading</h1>
                  </div>
              </div> 
          ):(
            roomType.map((items, index) => (
              <div key={index} className="item rounded m-4 bg-slate-100">
                <img src={items.images[0].img} alt="" className='h-[15em] w-full object-cover' />
                <div className="card p-6 shadow-xl">
                  <h2 className="text-xl font-bold uppercase py-2">{items.name}</h2>
                  <p className="py-3 text-sm">{items.info}</p>
                  <Link to={`/roomGallery/${items._id}`}>
                    <button className='uppercase bg-black text-white text-xs px-4 py-2 hover:bg-[#6cd234]'>{`Book From ${items.price}$`}</button>
                  </Link>
                  <hr className='my-3 w-full border-[silver]' />
                  <div className="lst flex place-content-between text-slate-500">
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
            )))}
          </div>
          <div className="mb-8 my-4 bg-black h-fit max-w-lg md:max-w-6xl mx-auto "  id="check-availability">
                <div className="mini p-4 md:p-0 md:w-[30vw] lg:w-[20vw]">
                  <form onSubmit={availabilityHandler} action="">
                    {error && <div className="error-message text-red-500 font-semibold bg-red-100 m-4 p-2">{error}</div>}
                    <div className="in m-4">
                      <input onChange={(e) => setStartDate(e.target.value)} type="date" placeholder='CheckIn Date' name="" id="" className='w-full bg-black text-white border-[1px] border-gray-600 p-2' min={today}/>
                    </div>
                    <div className="in m-4">
                      <input onChange={(e) => setEndDate(e.target.value)} type="date" placeholder='CheckOut Date' name="" id="" className='w-full bg-black text-white border-[1px] border-gray-600 p-2'/>
                    </div>
                    <div className="m-4">
                      <select onChange={(e) => setTotalRooms(e.target.value)} name="" placeholder='RoomType' id="totalRoom" className='w-full bg-black text-white border-[1px] border-gray-600 p-2'>
                          <option value="">Rooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                    </div>
                    <div className="m-4">
                      <button disabled={loading} type='submit' className='bg-[#6dc234] w-full p-2 text-white uppercase text-sm hover:bg-[#343434]'>{loading ? 'Checking...' : 'Check Availability'}</button>
                    </div>
                  </form>
                  <div className="service mt-7 text-sm">
                    <h1 className='text-white m-4 text-lg'>SERVICES:</h1>
                    <div className="mx-4">
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Welcome Drink</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Television</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>King Beds</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Bike Rental</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>No Smoking</h1>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="extra my-7 text-sm">
                    <h1 className='text-white m-4 text-lg'>EXTRA SERVICES:</h1>
                    <div className="mx-4">
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>BreakFast</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Swimming Pool</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Car Rental</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Sea View</h1>
                      </div>
                      <div className="flex py-2">
                        <input type="checkbox" name="" id="" />
                        <h1 className='text-white px-2'>Laundry</h1>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default rooms
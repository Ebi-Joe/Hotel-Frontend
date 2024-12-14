import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'

function NewReview() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [good, setGood] = useState('')
    const [name, setName] = useState('');
    const [point, setPoint] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState("");
    const [rating, setRating] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setDate(currentDate);
    }, []);

    const reviewHandler = async (e) => {
        e.preventDefault();
        if (!name || !point || !description || !date || !rating) {
            setError("Please fill in all fields");
            return
        }
        setLoading(true);
        setError('');
        setGood('')
        try {
            const res = await fetch("http://localhost:8000/api/newReview", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ name, point, description, rating, date })
            })
            const data = await res.json();
            console.log(data)
            if (res.ok) {
                setGood("Review Created Successfully")
                setTimeout(() => {
                    navigate("/review")
                    window.location.reload()
                }, 2000);
                setName('');
                setPoint('');
                setDescription('');
                setDate('');
                setRating('');
                
            } else {
                if (data.message ) {
                    setError(data.message)
                  } else {
                    setError("An error occurred. Please try again.");
                  }
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
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
        <div className="flex h-full md:h-screen bg-slate-200">
            <AdminSidebar/>
            <div className="ml-[5em] md:ml-[17em] mt-16">
                <div className="flex">
                    <Link to='/review'>
                        <div className="flex text-xl font-semibold mx-2 text-[tomato]">
                            <h1 className='px-1'>Review</h1>
                            <RxDoubleArrowLeft className='mt-1.5 font-bold'/>
                        </div>
                    </Link>
                    <h1 className='text-xl font-semibold'>New Review</h1>
                </div>
                <div className="p-4">
                    <div className="bg-[tomato]  rounded-xl p-4 pt-8 md:flex">
                        <div className="form">
                            <form action="" onSubmit={reviewHandler}>
                                <div className="lg:flex md:w-full">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Name:</label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Point:</label>
                                        <input type="text" onChange={(e) => setPoint(e.target.value)} name="" placeholder='Enter Point Here'  className='block w-full text-black border border-gray-300 rounded-lg outline-none p-2 m-2 bg-gray-50'/>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Description</label>
                                        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Enter review Description' name=""  className='p-2 md:w-[28vw] outline-none m-2 rounded-md'/>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Date:</label>
                                        <input type="date" onChange={(e) => setDate(e.target.value)} placeholder='Enter Date Joined Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Rating:</label>
                                        <input type="number" step="0.1" onChange={(e) => setRating(e.target.value)} placeholder='Enter Review Rating Here'className='p-2 w-full outline-none m-2 rounded-md' />
                                    </div>
                                </div>
                                <div className="btn m-4 text-center">
                                    <button disabled={loading} type='submit' className='m-2 p-2 px-4 bg-green-400 text-white font-semibold rounded-md hover:bg-[#55ea55] hover:text-black'>{loading ? "Creating Review...." : "Create Review"}</button>
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

export default NewReview
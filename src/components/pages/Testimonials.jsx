import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Serve from '../Serve'
import Review from '../Review'

function Testimonials() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [good, setGood] = useState('')
  const [name, setName] = useState('');
  const [point, setPoint] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState("");
  const [rating, setRating] = useState('');

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
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/newReview", {
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
                setName('');
                setPoint('');
                setDescription('');
                setDate('');
                setRating('');  
                
                setTimeout(() => {
                  setGood('');
                  setError('')
                  window.location.reload()
              }, 2000);
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

        <Header/>
        <div className="testimonial flex relative justify-center items-center text-center">
            <img src="/img/Testimonial.jpg" alt="" className='brightness-75 h-[63vh] lg:h-full w-screen object-cover' />
            <h3 className='absolute text-3xl md:text-5xl lg:text-6xl text-white'>Testimonials</h3>
        </div>

        <div className="review1">
          <div className="fst pt-8">
              <h1 className='text-center uppercase tracking-widest'>people love us</h1>
              <hr className='w-[4vw] mt-3 mx-auto border-[#6dc234]' />
              <h3 className='text-center text-4xl py-1 capitalize'>what people have to say</h3>
          </div>
          
          <div className="top py-20 grid grid-cols-1 md:grid-cols-3 max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto">
            <div className="1 border-gray border-[1px] m-3 p-8 text-center">
              <i className="fa-solid fa-sailboat text-4xl p-2"></i>
              <h1 className='py-1 font-medium text-2xl'>Terry Johnson</h1>
              <h3 className='py-2 text-sm font-normal'>The location was perfect for exploring the city. I highly recommend this hotel!</h3>
            </div>
            <div className="2 border-gray border-[1px] m-3 p-8 text-center">
              <i className="fa-solid fa-sailboat text-4xl p-2"></i>
              <h1 className='py-1 font-medium text-2xl'>Maria Kulis</h1>
              <h3 className='py-2 text-sm font-normal'>The staff was friendly, and the room was clean and comfortable.</h3>
            </div>
            <div className="3 border-gray border-[1px] m-3 p-8 text-center">
              <i className="fa-solid fa-sailboat text-4xl p-2"></i>
              <h1 className='py-1 font-medium text-2xl'>Alex Fleet</h1>
              <h3 className='py-2 text-sm font-normal'> The amenities were excellent, the staff was attentive and made my stay enjoyable.</h3>
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 " id='form'>
          <div className="container px-4 mx-auto">
            <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                <form onSubmit={reviewHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                        <input onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your full name" type="text" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 mb-1" htmlFor="email">Your Point</label>
                        <input onChange={(e) => setPoint(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your point" type="text" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 mb-1" htmlFor="message">Your Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows="4" placeholder="Enter your description" name="message" id="message" ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 mb-1" htmlFor="email">Your Rating</label>
                        <input onChange={(e) => setRating(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your rating" type="number" step="0.1" required/>
                    </div>
                    <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
                        {loading ? "Sending..." : "Send Review"}
                    </button>
                </form>
              </div>
          </div>
        </div>
        <Review/>
        <Serve/>
        <Footer/>
    </>
  )
}

export default Testimonials
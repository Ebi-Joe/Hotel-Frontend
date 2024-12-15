import React, { useState } from 'react'
import Contact from '../Contact'

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [good, setGood] = useState('')

    const handleContact = async (e) => {
        e.preventDefault()
        if ( !name || !email || !message ) {
            setError("Please fill in all field!!..")
            return
        }
        setError('')
        setGood('')
        setLoading(true)
        try {
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/newContact", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ name, email, message })
            })
            const data = await res.json()
            console.log(data)
            if (res.ok) {
                setGood("Your Message has been sent to us, we'll be reaching out to you soonest")
            } else {
                if (data.message === "Unauthorized") {
                    setError("You are not logged in. Please log in to continue.");
                } else {
                    setError(data.message);
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
        <div className="contactus">
            <div className="img">
                <img src="/img/DSCF3443-2.jpg" alt="" className='h-[63vh] lg:h-full w-screen object-cover'/>
            </div>

            <div className="txt bg-[white] p-4 w-[35vw] rounded-t-xl max-w-md mx-auto relative top-[-32px]">
                <h2 className=' text-center text-[20px] md:text-4xl py-3 font-semibold'>Contact Us</h2>
            </div>
            
            <div className="txts pb-12">
                <h6 className='text-center text-3xl font-bold'>Questions? Get in touch!</h6>
                <h6 className='text-center text-md font-medium'>Whatever your query, we're here to help. Click below to send us a message.</h6>
            </div>

            <a href="#form">
                <div className="btn text-center pb-8">
                    <button disabled={loading} className='uppercase bg-[#007aff] p-3 font-black text-white text-sm hover:bg-[blue] animate-bounce duration-1000 ease-in-out'>
                        {loading ? "Sending..." : "Send Us A Message"}
                    </button>
                </div>
            </a>

            <Contact/>

            <div className="mx-auto py-8 " id='form'>
                <div className="container px-4 mx-auto">
                    <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <form onSubmit={handleContact}>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                                <input onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your name" type="text" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows="4" placeholder="Enter your message" name="message" id="message" ></textarea>
                            </div>
                            <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default ContactUs
import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

function Fpassword() {
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [good, setGood] = useState()
    const [loading, setLoading] = useState(false)

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()
        if (!email) {
            setError("Fill In This Field")
            return
        }        
        setError('')
        setGood('')
        setLoading(true)

        try {
            const res = await fetch("http://localhost:8000/api/forgetPassword", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ email })
            })
            const data = await res.json()
            if (res.ok) {
                setGood("Password Reset Link Has Been Sent To Your Email")
            } else {
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("An Error Was Encountered While Sending mail")
                }
            }
        } catch (error) {
            console.log(error);            
        } finally {
            setLoading(false)
        }
    }
  return (
    <>
        <Header/>
        <div className="flex relative justify-center text-center items-center">
            <img src="/img/ForgotPassword.jpg" alt="" className='w-full h-screen object-cover' />
            <div className="flex top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute items-center justify-center">
                {error && <div className="error-message text-white bg-red-500 text-center font-bold text-xl m-4 p-2 rounded-lg">{error}</div>}
            </div>
            <div className="flex top-1/4 md:left-1/2 md:-translate-x-1/2 -translate-y-60 absolute items-center justify-center">
                {good && <div className="good-message text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
            </div>
            <div className="flex flex-col items-center justify-center dark absolute">
                <div className="w-full max-w-md fg rounded-lg shadow-md p-4">
                    <h2 className="text-2xl font-bold text-gray-200">Forgot Your Password?</h2>
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">It happens to the best of us.</h2>

                    <form onSubmit={forgotPasswordHandler} className="flex flex-col">
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
                        <h1 className='mb-4 text-white text-xs font-medium'>**We'll be sending a mail to this E-mail address</h1>

                        <button disabled={loading} className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">{loading ? "Sending Mail..." : "Send Mail"}</button>
                    </form>

                    <Link to='/login'>
                        <div className="flex justify-center mt-4">
                            <button className="text-sm text-gray-400 hover:underline">Back to Login??</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fpassword
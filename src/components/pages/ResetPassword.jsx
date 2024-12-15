import React, { useState } from 'react'
import Header from '../Header'
import { Link, useParams } from 'react-router-dom'

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [good, setGood] = useState('')
    const [loading, setLoading] = useState(false)

    const params = useParams()
    const token = params.token    

    const resethandler = async (e) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) {
            setError("Fill In All Fields.");
            setLoading(false);
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }
        setError('')
        setGood('')
        setLoading(true)


        try { 
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/resetPassword", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ token, newPassword, confirmPassword })
            })
            const data = await res.json();
            if (res.ok) {
                setGood("Password Reset Successful!!")
                setNewPassword('')
                setConfirmPassword('')
            } else {
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("An Error Was Encountered While Resetting Password")
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
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
        <div className="md:flex relative justify-center text-center items-center">
            <img src="/img/Reset.jpg" alt="" />
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Reset Your Password?</h2>

                    <form onSubmit={resethandler} className="flex flex-col">

                        <input onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter your Newpassword" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>

                        <input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your Newpassword" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>

                        <button disabled={loading} className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">{loading ? "Reseting Password...." : "Reset Password"}</button>
                    </form>

                    <Link to='/login'>
                        <div className="flex justify-center mt-4">
                            <a className="text-sm text-gray-400 hover:underline">Back to Login??</a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetPassword
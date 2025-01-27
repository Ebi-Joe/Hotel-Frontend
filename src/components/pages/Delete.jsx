import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'

function Delete() {
    const [error, setError] = useState('')
    const [good, setGood] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const redirect = useNavigate()

    const deleteHandler = async (e) => {
        e.preventDefault()
        setError('')
        setGood('')
        setLoading(true)

        try {
            const res = await fetch("https://hotel-backend-itqc.onrender.com/api/deleteOne-user", {
                method: "DELETE",
                headers: {
                    'Content-Type' : "application/json"
                },
                body:JSON.stringify({ id, password 
                    
                })
            })
            const data = await res.json()

            if (res.ok) {
                setGood("Your Account Has Been Deleted")
                localStorage.clear();
                redirect("/signup")
            } else {
                if (data.message) {
                    setError(data.message)
                }
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

  return (
    <>
        <Header/>
        <div className="flex justify-center text-center items-center">
            <div className="flex top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute items-center justify-center">
                {error && <div className="error-message text-white bg-red-500 text-center font-bold text-xl m-4 p-2 rounded-lg">{error}</div>}
            </div>
            <div className="flex top-1/4 md:left-1/2 md:-translate-x-1/2 -translate-y-60 absolute items-center justify-center">
                {good && <div className="good-message text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-md fg rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold p-4 text-gray-200">Delete Your account?</h2>

                    <form onSubmit={deleteHandler} className="flex flex-col">
                        <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
                        <button disabled={loading} className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">{loading ? "Deleting User..." : "Delete User"}</button>
                    </form>

                    <Link to='/'>
                        <div className="flex justify-center mt-4">
                            <button className="text-sm text-gray-400 hover:underline">Back to Home??</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Delete
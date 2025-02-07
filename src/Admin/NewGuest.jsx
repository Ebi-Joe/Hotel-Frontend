import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'

function newGuest() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('Guest')
    const [error, setError] = useState('')
    const [good, setGood] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const newGuestHandler = async (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
            setError('Please fill in all fields.')
            return
        }
        setError('');
        setGood('');
        setLoading(true)
        try {
            const res = await fetch ("https://hotel-backend-itqc.onrender.com/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    role,   
                })
            })
            const data = await res.json()
            console.log(data);
            
            if (res.ok){
                setGood("User Has Been Registered Successfully")
                setTimeout(() => {
                    navigate("/guestList")
                }, 2000);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setRole('');
            } else {
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("An Error Was Encountered While Creating A New User/Guest")
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
            {error && <div className="error-message fixed text-[tomato] bg-white text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
        <div className="flex h-screen bg-slate-200">
            <AdminSidebar/>
            <div className="ml-[5em] md:ml-[17em] mt-16">
                <div className="flex">
                    <Link to='/guestList'>
                        <div className="flex text-xl font-semibold mx-2 text-[tomato]">
                            <h1 className='px-1'>Guest</h1>
                            <RxDoubleArrowLeft className='mt-1.5 font-bold'/>
                        </div>
                    </Link>
                    <h1 className='text-xl font-semibold'>New Guest</h1>
                </div>
                <div className="p-4">
                    <div className="bg-[tomato]  rounded-xl p-4 pt-8 md:flex">
                        <div className="form">
                            <form action="" onSubmit={newGuestHandler}>
                                <div className="lg:flex">
                                    <div className="m-2 md:w-[48.4vw] grid">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Email</label>
                                        <input onChange={(e) => {setEmail(e.target.value)}} type='email' placeholder='Enter Email Description' name=""  className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                </div>
                                <div className="lg:flex md:w-[50vw]">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>FirstName:</label>
                                        <input onChange={(e) => {setFirstName(e.target.value)}} type="text" placeholder='Enter Firstname Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>LastName:</label>
                                        <input onChange={(e) => {setLastName(e.target.value)}} type="text" name="" placeholder='Enter Lastname Here'  className='block w-full text-black border border-gray-300 rounded-lg outline-none p-2 m-2 bg-gray-50'/>
                                    </div>
                                </div>
                                <div className="lg:flex md:w-[50vw]">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Password:</label>
                                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Enter Password Here' className='p-2 w-full outline-none m-2 rounded-md'/>
                                    </div>
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Confirm Password:</label>
                                        <input onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" placeholder='Enter Confirm Password Here'className='p-2 w-full outline-none m-2 rounded-md' />
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="m-2 grid md:w-[24.4vw]">
                                        <label htmlFor="" className='mx-2 text-white font-bold text-xl'>Role:</label>
                                        <select onChange={(e) => setRole(e.target.value)} name="" id="" className='p-2 w-full outline-none m-2 rounded-md'>
                                            <option value="Guest">Guest</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="btn m-4 text-center">
                                    <button disabled={loading} type='submit' className='m-2 p-2 px-4 bg-green-400 text-white font-semibold rounded-md hover:bg-[#55ea55] hover:text-black'>{loading ? "Creating A New Guest" : "Create Guest"}</button>
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

export default newGuest
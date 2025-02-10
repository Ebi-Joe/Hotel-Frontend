import React, { useContext } from 'react'
import Header from '../Header'
import { MdVerified } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import HotelContext from '../../context/HotelContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import AuthContext from '../../context/AuthContext'

function UserDash() {
  const { user, loading } = useContext(HotelContext)
  const [ state, dispatch ] = useContext(AuthContext)
  const { deleteItem } = useLocalStorage('auth-token')
  const navigate = useNavigate()

  const logOut = (e) => {
    e.preventDefault()
    dispatch({ type: "setToken", payload: null })
    deleteItem("auth-token")   
    navigate("/login")
    localStorage.clear();
  }

  return (
    <>
        <Header/>
        <div className="pt-20 rounded-2xl shadow-2xl p-5 md:p-20 mx-3">
          <div className="flex justify-between">
            <h1 className='font-semibold font-serif text-2xl p-2'>Your Details</h1>
            <Link to='/'>
              <h1 className='font-semibold bg-[#6dc234] p-2 px-5 w-fit rounded-lg'>Go To Home</h1>
            </Link>
          </div>
          <hr className='mt-6' />
          <div className="mt-7">
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>User Id:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data._id)}</h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>FirstName:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data.firstName)}</h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>LastName:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data.lastName)}</h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>Email:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data.email)}</h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>Role:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data.role)}</h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>Verification Status:</h1>
              <h1 className='p-0.5 flex'><MdVerified className='text-[#6dc234] text-2xl' /></h1>
            </div>
            <div className="flex py-1">
              <h1 className='font-semibold px-2 text-lg'>Date Joined:</h1>
              <h1 className="p-0.5">{loading ? <span className='animate-ping'>...</span>:( user.data.createdAt)}</h1>
            </div>
            <div className="" onClick={logOut}>
              <button className='bg-[#6dc234] hover:bg-red-500 mx-4 p-2 px-6 rounded-lg font-semibold hover:scale-125 transition duration-700 ease-in-out'>LogOut</button>
            </div>
          </div>
        </div>

        
    </>
  )
}

export default UserDash
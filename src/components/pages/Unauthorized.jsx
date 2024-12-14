import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <>
        <Header/>
        <div className="flex justify-center items-center pt-16">
          <img src="/img/Authorization.jpg" alt="" />
        </div>
        <h1 className='text-center font-semibold text-red-600 text-lg px-12'>You have been denied access to this part of the Hotel web app. Use other parts of the Site</h1>
        <Link to='/'>
          <div className="flex justify-center items-center my-4">
            <button className='bg-green-500 text-white p-3 px-6 rounded-xl font-semibold'>Back To Home</button>
          </div>
        </Link>
    </>
  )
}

export default Unauthorized
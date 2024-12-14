import React, { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Serve from '../Serve'
import Rooms from '../Rooms'

function Search() {
  return (
    <>
        <Header/>
        <div className="banner flex relative justify-center items-center">
            <img src="/img/Banner1.jpg" alt="" className='brightness-75 h-[63vh] lg:h-full w-screen object-cover' />
            <h1 className='absolute text-white text-2xl md:text-5xl lg:text-7xl'>Search</h1>
        </div>
        <div className="md:flex flex-none max-w-5xl mx-auto">
            <Rooms/>
        </div>
        <Serve/>
        <Footer/>
    </>
  )
}

export default Search
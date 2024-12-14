import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Serve() {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

  return (
    <>
        <div className="serve bg-[#181818] h-[fit]">
            <div className="img grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6">
                <Link to='/services'>
                    <div className="1 flex relative justify-center items-center">
                        <img src="/img/spa.jpg" alt="" className='p-2' data-aos="zoom-in"/>
                        <h1 className='absolute z-10 text-lg text-[white] py-1 px-4'>Spa Salon</h1>
                    </div>
                </Link>
                <Link to='/services'>
                    <div className="2 flex relative justify-center items-center">
                        <img src="/img/resturant.jpg" alt="" className='p-2' data-aos="zoom-in"/>
                        <h1 className='absolute z-10 text-lg text-[white] top-[40%] left-[35%] py-1 px-4'>Restuarant</h1>
                    </div>
                </Link>
                <Link to='/services'>
                    <div className="3 flex relative justify-center items-center">
                        <img src="/img/pool.jpg" alt="" className='p-2' data-aos="zoom-in"/>
                        <h1 className='absolute z-10 text-lg text-[white] top-[40%] left-[40%] py-1 px-4'>Pool</h1>
                    </div>
                </Link>
                <Link to='/services'>
                    <div className="4 flex relative justify-center items-center">
                        <img src="/img/act.jpg" alt="" className='p-2' data-aos="zoom-in"/>              
                        <h1 className='absolute z-10 text-lg text-[white] top-[40%] left-[35%] py-1 px-4'>Activities</h1>
                    </div> 
                </Link>
            </div>
        </div>
    </>
  )
}

export default Serve
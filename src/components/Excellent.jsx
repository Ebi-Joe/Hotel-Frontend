import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Excellent() {

   useEffect(() => {
    AOS.init({ duration: 2000 })
   }, [])

  return (
    <>
        <div className="excellent text-center py-24 bg-[whitesmoke] overflow-x-hidden">
            <h1 className='text-[18px] tracking-widest'>Excellent Restuarant</h1>
            <hr className='w-[5vw] mt-3 mx-auto border-[#6dc234]' />
            <h2 className='py-3 text-5xl'>Dining & Bars</h2>
            <div className="sect mt-14 mx-6 lg:mx-36 place-content-center bg-white">
                <div className="1 md:flex">
                    <img src="/img/rest-1.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    <div className="txt py-[10%] px-[4em]">
                        <h2 className='text-3xl'>Beach Restaurant</h2>
                        <h3 className='text-[13px] p-4'>A casual dining spot by the shore, offering fresh seafood and tropical drinks with stunning ocean views.</h3>
                        <Link to='/restaurant'>
                            <button className='text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                        </Link>
                    </div>
                </div>
                <div className="2 grid md:flex">
                    <div className="txt py-[10%] px-[4em] order-last md:order-first">
                        <h2 className='text-3xl'>Pool Restaurant</h2>
                        <h3 className='text-[13px] p-4'> A casual dining spot near a swimming pool, serving light meals and drinks, often with poolside service for convenience.</h3>
                        <Link to='/restaurant'>
                            <button className='text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                        </Link>
                    </div>
                    <img src="/img/rest-2.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]' data-aos="fade-left"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Excellent
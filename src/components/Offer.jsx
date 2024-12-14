import React from 'react'

function Offer() {
  return (
    <>
        <div className="offer text-center py-24 bg-[whitesmoke]">
            <h1 className='text-[18px] tracking-widest'>Excellent Services</h1>
            <hr className='w-[5vw] mt-3 mx-auto border-[#6dc234]' />
            <h2 className='py-3 text-5xl'>What We Offer</h2>
            <div className="sect mt-14 mx-6 lg:mx-36 place-content-center bg-white">
                <div className="1 md:flex">
                    <img src="/img/spa.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]'/>
                    <div className="txt py-[10%] px-[4em]">
                        <h2 className='text-3xl'>Spa Salon</h2>
                        <h3 className='text-[13px] p-4'>A serene oasis for relaxation and rejuvenation. Enjoy soothing massages and revitalizing facials in a tranquil environment.</h3>
                        <button className='bg-black text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                    </div>
                </div>
                <div className="2 grid md:flex">
                    <div className="txt py-[10%] px-[4em] order-last md:order-first">
                        <h2 className='text-3xl'>Restaurant</h2>
                        <h3 className='text-[13px] p-4'>A lively spot with a diverse menu and exceptional service for a memorable dining experience.</h3>
                        <button className='bg-black text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                    </div>
                    <img src="/img/resturant.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]'/>
                </div>
                <div className="3 md:flex">
                    <img src="/img/pool.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]'/>
                    <div className="txt py-[10%] px-[4em]">
                        <h2 className='text-3xl'>Swimming Pool</h2>
                        <h3 className='text-[13px] p-4'> A refreshing oasis for relaxation and fun, perfect for swimming and leisure activities.</h3>
                        <button className='bg-black text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                    </div>
                </div>
                <div className="4 grid md:flex">
                    <div className="txt py-[10%] px-[4em] order-last md:order-first">
                        <h2 className='text-3xl'>Activities</h2>
                        <h3 className='text-[13px] p-4'>Engaging pursuits that promote enjoyment, fitness, and social interaction, such as sports, games, arts and crafts, and outdoor adventures.</h3>
                        <button className='bg-black text-white uppercase tracking-wide text-[13px] px-4 py-1'>Explore</button>
                    </div>
                    <img src="/img/act.jpg" alt="" className='w-screen md:w-[46.2vw] lg:w-[39vw]'/>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Offer
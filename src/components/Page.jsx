import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Page() {
    
    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

  return (
    <>
        <div className="page overflow-x-hidden">
            <div className="1 md:flex mx-18 lg:mx-48 my-24">
                <div className="txt text-center place-content-center mx-8">
                    <p className='uppercase'>hotel</p>
                    <h1 className='text-5xl p-4'>Here is a tribute <br />to good life!</h1>
                    <h3 className='text-[13px] p-4'>Yet we accuse and acknowledge the just virtues of life, leading to present delights and perfect joys, expecting happiness and serenity, untouched by worry, untroubled by turmoil.</h3>
                </div>
                <img src="/img/page1.png" alt="" className='w-screen md:w-[36vw]' />
            </div>
            <div className="2 grid md:flex">
                <img src="/img/page2.jpg" alt="" className='w-screen md:w-[49.5vw]' data-aos="fade-right" />
                <div className="txt text-center py-14 px-14 md:px-16 lg:px-24 bg-[whitesmoke] place-content-center order-first md:order-last">
                    <h1 className='text-4xl'>Private pool suite</h1>
                    <h3 className='text-[13px] p-4'>Indulge in the epitome of luxury in our Private Pool Suite, where every detail is crafted to provide unparalleled relaxation. Unwind in your own private oasis, surrounded by breathtaking views and equipped with.</h3>
                    <a href='#check-availability'>
                        <button className='uppercase tracking-widest bg-[black] text-white text-[11px] p-2 px-3 hover:bg-[#6dc234]'>Check Availability</button>
                    </a>
                </div>
            </div>
            <div className="3 md:flex">
                <div className="txt text-center py-14 px-14 md:px-16 lg:px-24 bg-[whitesmoke] place-content-center">
                    <h1 className='text-4xl'>Sea view suite</h1>
                    <h3 className='text-[13px] p-4'>Experience the pinnacle of oceanfront elegance in our Sea View Suite, where every detail is crafted to deliver unrivaled tranquility. Relax in your private seaside retreat, surrounded by breathtaking marine views and featuring.</h3>
                    <a href='#check-availability'>
                        <button className='uppercase tracking-widest bg-[black] text-white text-[11px] p-2 px-3 hover:bg-[#6dc234]'>Check Availability</button>
                    </a>
                </div>
                <img src="/img/page3.jpg" alt="" className='w-screen md:w-[49.5vw]' data-aos="fade-left" />
            </div>
        </div>
    </>
  )
}

export default Page
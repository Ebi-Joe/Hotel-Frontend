import React from 'react'
import { Link } from 'react-router-dom'
import Serve from '../Serve'
import Review from '../Review'

function About() {
  return (
    <>
      <div className="about">
        <div className="img">
          <img src="/img/AboutUs.jpg" alt="" className='w-screen h-[63vh] lg:h-full object-cover'/>
        </div>
        <div className="txt">
          <h1 className='text-3xl md:text-5xl lg:text-6xl capitalize text-white font-black font-[SuisseBPIntl,sans-serif] absolute top-[14%] md:top-[20%] lg:top-[28%] left-[10%]'>About <br />Hotel?</h1>
        </div>

        <div className="top bg-slate-200">
          <h1 className='text-center pt-12'>A Bit About Us</h1>
          <hr className='w-[3vw] mt-1 mx-auto border-[#6dc234]' />
          <h3 className='text-center text-4xl py-2'>Finest Hotel</h3>

          <div className="ok md:px-32 py-9 grid grid-cols-1 md:grid-cols-3">
            <div className="4 text-center p-4">
              <i className="fa-solid fa-martini-glass-citrus text-4xl p-2"></i>
              <h2 className='capitalize text-xl'>welcome drink</h2>
              <h3 className='text-[13px] p-2'>So that you may see how every exclusive cocktail unfolds, I will reveal the entire space for recreation, and those very things that come from joy and relaxation.</h3>
              <Link to='/services'>
                  <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
              </Link>
            </div>
            
            <div className="5 text-center p-4">
              <i className="fa-solid fa-water-ladder text-4xl p-2"></i>
              <h2 className='capitalize text-xl'>swimming pool</h2>
              <h3 className='text-[13px] p-2'>So that you may understand from where every serene swimming experience begins, I will reveal the entire thing, and those very things that come from relaxation and pleasure.</h3>
              <Link to='/services'>
                  <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
              </Link>
          </div>

          <div className="6 text-center p-4">
            <i className="fa-solid fa-utensils text-4xl p-2"></i>
            <h2 className='capitalize text-xl'>food included</h2>
            <h3 className='text-[13px] p-2'>So that you may understand from where every included meal begins, I will reveal the entire experience, and those very things that come from satisfaction and delight.</h3>
            <Link to='/services'>
                <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
            </Link>
          </div>
        </div>
      </div>

        <div className="info py-14">

          <div className="1">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Our mission is simple</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'> We aim to provide you with the best hotels and resorts around the world at the best available price. Our hotel information includes ratings, reviews, filters and other features to help you make the right selection.</h2>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>We aim to have you make the right decision for your next hotel booking by listing the most relevant information on our website. We compare prices from leading travel brands in a fast, simple and easy to use interface </h2>
          </div>
          
          <div className="2">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>MEMBERS GET MORE</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>After booking your stay via our website, Hotel.com, you’ll enjoy a range of freebies from the moment you arrive. Plus you’ll save 10% on future stays and earn tokens redeemable for a night on us. Interested? All you need to do is register via the website and book your stay!</h2>
          </div>

          <div className="3">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>A wide choice of accommodation options.</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>From chalets, ryokans, villas, to apartments, resorts and five staer hotels. If you are searching for a cheap beach resort or a deluxe five star hotel - our site is a guide to the best places to stay. We list over a million properties around the world to help you find the best accommodation options today.</h2>
          </div>

          <div className="4">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Changes, Cancellations, Phone or Group Bookings.</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Please contact the travel site you booked with directly, this information can be found on your confirmation email or credit card receipt.</h2>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>To make a new group booking or phone reservation contact us <Link to='/contact'>here</Link> .</h2>
          </div>

          <div className="5">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>FOOD</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>From organic, authentic dishes to locally-sourced produce, high-quality nutrition is especially important on the road. Plus, our Grab and Go section makes ‘missing breakfast’ a thing of the past!</h2>
          </div>

          <div className="6">
            <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>WORK, STAY, EXPLORE, COWORK</h1>
            <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Building one of the largest hospitality brands in the world with one of the fastest conversion models globally. Blending beautifully designed accommodation with coworking, recreation, wellness, and local experiences, Hotel is custom-built for today’s nomadic traveler, providing guests with a global infrastructure to travel and work abroad seamlessly.</h2>
          </div>
        </div>
      </div>
      <div className="2 grid md:flex">
          <img src="/img/page2.jpg" alt="" className='w-screen md:w-[49.5vw]' />
          <div className="txt text-center py-14 px-14 md:px-16 lg:px-24 bg-[whitesmoke] place-content-center order-first md:order-last">
              <h1 className='text-4xl'>Private pool suite</h1>
              <h3 className='text-[13px] p-4'>Indulge in the epitome of luxury in our Private Pool Suite, where every detail is crafted to provide unparalleled relaxation. Unwind in your own private oasis, surrounded by breathtaking views and equipped with.</h3>
              <button className='uppercase tracking-widest bg-[black] text-white text-[11px] p-2 px-3 hover:bg-[#6dc234]'>Check Availability</button>
          </div>
      </div>
      <div className="3 md:flex">
          <div className="txt text-center py-14 px-14 md:px-16 lg:px-24 bg-[whitesmoke] place-content-center">
              <h1 className='text-4xl'>Sea view suite</h1>
              <h3 className='text-[13px] p-4'>Experience the pinnacle of oceanfront elegance in our Sea View Suite, where every detail is crafted to deliver unrivaled tranquility. Relax in your private seaside retreat, surrounded by breathtaking marine views and featuring.</h3>
              <button className='uppercase tracking-widest bg-[black] text-white text-[11px] p-2 px-3 hover:bg-[#6dc234]'>Check Availability</button>
          </div>
          <img src="/img/page3.jpg" alt="" className='w-screen md:w-[49.5vw]' />
      </div>
      <Review/>
      <Serve/>
    </>
  )
}

export default About
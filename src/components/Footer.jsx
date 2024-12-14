import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="footer bg-black text-[white] grid grid-cols- md:grid-cols-3 px-[2em] lg:px-[12em] py-14">
        <div className="1">
          <h1 className='py-4 font-bold'>Hotel</h1>
          <address className="text-[14px]">
            03 Avenue Street<br />
            Ikeja Lagos
          </address>
        </div>
        <div className="2">
          <h1 className='uppercase py-4 font-semibold'>Information</h1>
          <Link to='/TandC'>
              <h2 className='text-[14px] hover:text-[#6dc234]'>Terms & Conditions</h2>
          </Link>
          <Link to='/services'>
              <h2 className='text-[14px] hover:text-[#6dc234]'>Services</h2>
          </Link>
          <Link to='/restaurant'>
              <h2 className='text-[14px] hover:text-[#6dc234]'>Restuarant</h2>
          </Link>
          <Link to='/testimonials'>
              <h2 className='text-[14px] hover:text-[#6dc234]'>Testimonials</h2>
          </Link>
          <Link to='/gallery'>
              <h2 className='text-[14px] hover:text-[#6dc234]'>Gallery & Images</h2>
          </Link>
        </div>
        <div className="3">
          <h1 className='uppercase py-4 font-semibold'>About Us</h1>
          <h1 className='text-[14px]'>At Hotel, we pride ourselves on providing exceptional service to ensure that every guest feels at home. Our dedicated staff is committed to making your stay memorable, whether you're here for business or leisure.</h1>
        </div>
      </div>
      <div className="className bg-[#181818] md:flex justify-between px-8 md:px-24 p-4">
        <h1 className='text-white'>2024 © Hotel. All rights reserved.</h1>
        <div className="nxt flex">
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <h1 className='px-2 text-white hover:text-[#6dc234]'>Facebook</h1>
          </a>
          <a href="https://www.instagram.com/">
            <h1 className='px-2 text-white hover:text-[#6dc234]'>Instagram</h1>
          </a>
          <a href="https://x.com/?lang=en">
            <h1 className='px-2 text-white hover:text-[#6dc234]'>Twitter</h1>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
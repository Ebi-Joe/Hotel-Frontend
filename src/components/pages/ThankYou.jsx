import React, { useContext, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HotelContext from '../../context/HotelContext'
import { Link, Navigate, useSearchParams } from 'react-router-dom'

function ThankYou() {
  const { createBooking, booking, isAuthenticated } = useContext(HotelContext)
  const [ searchParams ] = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  if (!isAuthenticated) {
    return <Navigate to='/login'/>
  }

  useEffect(() => {
    if( transaction_id && tx_ref){
      createBooking(tx_ref, transaction_id)
    }
  })

  return (
    <>
        <Header/>
        <div className="thankyou max-w-xl mx-auto py-6 shadow-xl">
            <div className="top bg-[silver] h-[35vh] text-center pt-6">
                <i className="fa-solid fa-circle-check text-[7em] p-2 text-[#02BF74] bg-[white] rounded-full"></i>
            </div>
            <div className="thank text-center h-[40vh]">
                <i className="fa-solid fa-star text-4xl text-[gold] pt-6"></i>
                <p className='text-[#02BF74] text-3xl'>Thank You! {booking?.firstName}</p>
                <p className=''>Thank's for your patronage, we're expecting you soon</p>
                <p className="pb-5">Your payment was processed <span className='text-[#02BF74]'>successfully</span></p>

                <Link to="/">
                    <button type="butto" className="bg-white text-center w-52 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group">
                    <div className="bg-green-400 rounded-xl h-12 w-12 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                        <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#000000"
                            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        ></path>
                        <path
                            fill="#000000"
                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        ></path>
                        </svg>
                    </div>
                    <p class="translate-x-2">Go To Home</p>
                    </button>
                </Link>

            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ThankYou
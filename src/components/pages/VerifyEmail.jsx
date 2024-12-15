import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';

function VerifyEmail() {
  const { token } = useParams()

  const verification = async () => {
    const res = await fetch(`https://hotel-backend-itqc.onrender.com/api/verify-email?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await res.json()
    console.log(data)
  }
  
  return (
    <>
        <div className="grid place-items-center text-center border-2 h-[80vh] my-[2em] max-w-[23rem] px-6 py-8 rounded-2xl mx-auto">
            <RiVerifiedBadgeFill className='text-7xl text-blue-600' />
            <h1 className='font-bold text-2xl py-3'>Please Verify Your Email 😂 Tobi Olobe</h1>
            <p className='text-[.8em] px-3 font-medium'>To use *HOTEL*, click the verification button. The link will self-destruct after one day. This helps keep your account secure.</p>
            <div className="btn">
                <button onClick={() => verification()} className='text-white bg-blue-600 py-2.5 px-4 rounded-lg font-semibold'>Verify my account</button>
            </div>
            <p className='text-[.8em] text-gray-500 font-medium px-5'>You're have been directed to this page because you recently created an account in HOTEL. Follow the prompts on this page to complete E-MAIL verification.</p>
        </div>  
    </>
  )
}

export default VerifyEmail
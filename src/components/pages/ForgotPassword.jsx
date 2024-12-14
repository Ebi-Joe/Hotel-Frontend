import React from 'react'
import Header from '../Header'
import { BsFillLightningChargeFill } from "react-icons/bs";

function ForgotPassword() {
  return (
    <>
      <Header/>
      <div className="pt-24">
        <div className="fg max-w-[23rem] py-10 mx-auto grid place-items-center text-center shadow-xl bg-blue-100">
          <BsFillLightningChargeFill className='bg-blue-600 rounded-full text-white w-10 h-10 p-2 ' />
          <h1 className='text-5xl font-bold m-6'>Forgot your password?</h1>
          <p className='py-3 px-8 text-gray-600 font-semibold'>To reset your password, click the button below The link will self-destruct after thirty minutes.</p>
          <div className="btn py-8">
            <button className='bg-blue-600 text-white font-semibold py-2 px-7 rounded-lg'>Reset your password</button>
          </div>
          <p className='px-6 py-3 text-gray-500'>You're have been directed to this page because you forgot your password in HOTEL web app. Follow the prompts on this page to reset your password.</p>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
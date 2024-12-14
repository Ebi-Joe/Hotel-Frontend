import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Serve from '../Serve'
import Faq from '../Faq'

function Terms() {
  return (
    <>
        <Header/>   
        <div className="TandC flex relative justify-center items-center">
            <img src="/img/services.jpg" alt="" className='h-[63vh] lg:h-full w-screen object-cover' />
            <h1 className='absolute text-white z-10 text-2xl md:text-4xl lg:text-6xl'>Terms & Conditions</h1>
        </div>
        <Faq/>
        <Serve/> 
        <Footer/>
    </>
  )
}

export default Terms
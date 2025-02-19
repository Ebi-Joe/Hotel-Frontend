import React, { useEffect } from 'react'
import Header from '../Header'
import Offer from '../Offer'
import Elegant from '../Elegant'
import Footer from '../Footer'
import Elegant1 from '../Elegant1'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Header/>
        <div className="services flex relative justify-center items-center">
            <img src="/img/services.jpg" alt="" className='h-[63vh] lg:h-full w-screen object-cover' />
            <h1 className='absolute text-white z-10 text-2xl md:text-5xl lg:text-7xl'>Services</h1>
        </div>
        <Elegant/>
        <Elegant1/>
        <Offer/>
        <Footer/>
    </>
  )
}

export default Services
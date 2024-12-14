import React from 'react'

function Banner() {
  return (
    <>
        <div className="banner">
            <div className="flex relative justify-center text-center items-center">
              <img src="/img/Banner.jpg" alt="" className='brightness-75 h-[63vh] lg:h-full w-screen object-cover'/>
              <h1 className='absolute text-[white] text-3xl md:text-5xl lg:text-6xl'>Discover your paradise <br />under the Blue sky</h1>
            </div>
        </div>
    </>
  )
}

export default Banner
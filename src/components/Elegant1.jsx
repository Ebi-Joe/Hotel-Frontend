import React from 'react'

function Elegant1() {
  return (
    <>
        <div className="elegant1 text-center text-xs grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-black text-white p-4 py-8 lg:px-[15em]">
            <div className="1">
                <i className="fa-solid fa-ban-smoking text-2xl p-2"></i>
                <h2 className='uppercase'>No Smoking</h2>
            </div>
            <div className="2">
                <i className="fa-solid fa-bed text-2xl p-2"></i>
                <h2 className='uppercase'>Big Beds</h2>
            </div>
            <div className="3">
                <i className="fa-solid fa-sailboat text-2xl p-2"></i>
                <h2 className='uppercase'>Yatch Riding</h2>
            </div>
            <div className="4">
                <i className="fa-solid fa-martini-glass-citrus text-2xl p-2"></i>
                <h2 className='uppercase'>Free Drinks</h2>
            </div>
            <div className="5">
                <i className="fa-solid fa-water-ladder text-2xl p-2"></i>
                <h2 className='uppercase'>Swimming Pool</h2>
            </div>
            <div className="6">
                <i className="fa-solid fa-utensils text-2xl p-2"></i>
                <h2 className='uppercase'>rooms Breakfast</h2>
            </div>
        </div>
    </>
  )
}

export default Elegant1
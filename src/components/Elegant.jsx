import React from 'react'
import { Link } from 'react-router-dom'

function Elegant() {
    
  return (
    <>
        <div className="elegant py-8 bg-slate-200">
            <h1 className='text-center tracking-widest'>Elegant Suites</h1>
            <hr className='w-[10vw] mt-3 mx-auto border-[#6dc234]' />
            <h3 className='text-center text-4xl py-4'>Unpretentious Luxury</h3>
            <div className="infos mx-18 lg:mx-36 grid grid-cols-2 lg:grid-cols-3">
                <div className="1 text-center p-4">
                    <i className="fa-solid fa-ban-smoking text-4xl p-2"></i>
                    <h2 className='capitalize text-xl'>smoking free</h2>
                    <h3 className='text-[13px] p-2'>So that you may understand from where every smoke is prohibited, I will reveal the entire thing, and those very things that come from health and wellness.</h3>
                    <Link to='/services'>
                        <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
                    </Link>
                </div>
                <div className="2 text-center p-4">
                    <i className="fa-solid fa-bed text-4xl p-2"></i>
                    <h2 className='capitalize text-xl'>king beds</h2>
                    <h3 className='text-[13px] p-2'>So that you may understand from where every royal sleep reigns, I will reveal the entire thing, and those very things that come from comfort and relaxation.</h3>
                    <Link to='/services'>
                        <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
                    </Link>
                </div>
                <div className="3 text-center p-4">
                    <i className="fa-solid fa-sailboat text-4xl p-2"></i>
                    <h2 className='capitalize text-xl'>yatch rental</h2>
                    <h3 className='text-[13px] p-2'>So that you may understand from where every elegant yacht experience originates, I will reveal the very things that come from tranquility and excitement.</h3>
                    <Link to='/services'>
                        <button className='uppercase bg-[black] text-white text-[11px] p-2 px-4 hover:bg-[#6dc234]'>Read More</button>
                    </Link>
                </div>
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
                    <h3 className='text-[13px] p-2'>So that you may understand from where every serene swimming experience begins, I will reveal the entire thing, and those very things that come from relaxation and pleasure</h3>
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
    </>
  )
}

export default Elegant
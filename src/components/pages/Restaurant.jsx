import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { PiChefHat } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GiHotMeal } from "react-icons/gi";

function Restaurant() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <div className="restaurant">
            <Header/>
            <div className="banner flex relative justify-center items-center">
                <img src="/img/Restaurant.jpg" alt="" className='h-[63vh] lg:h-full w-screen object-cover' />
                <h3 className='absolute text-2xl md:text-5xl lg:text-7xl text-white'>Restaurant</h3>
            </div>

            <div className="top py-20 grid grid-cols-1 md:grid-cols-3 max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto">
                <div className="1 border-gray border-[1px] m-3 p-8 text-center">
                    <BiDish className='text-5xl mx-auto' />
                    <h1 className='py-1 font-medium text-2xl'>High Quality Foods</h1>
                    <h3 className='py-2 text-sm font-normal'>"Experience the finest culinary delights, crafted with precision and passion."</h3>
                    <Link to='/services'>
                        <button className='my-1 bg-black hover:bg-[#6dc234] ease-in-out text-white text-[13px] p-2 px-4'>READ MORE</button>
                    </Link>
                </div>
                <div className="2 border-gray border-[1px] m-3 p-8 text-center">
                    <PiChefHat className='text-5xl mx-auto' />
                    <h1 className='py-1 font-medium text-2xl'>Inspiring Recipes</h1>
                    <h3 className='py-2 text-sm font-normal'>"Inspiring recipes transform simple ingredients into delightful meals."</h3>
                    <Link to='/services'>
                        <button className='my-1 bg-black hover:bg-[#6dc234] ease-in-out text-white text-[13px] p-2 px-4'>READ MORE</button>
                    </Link>
                </div>
                <div className="3 border-gray border-[1px] m-3 p-8 text-center">
                    <GiHotMeal className='text-5xl mx-auto' />
                    <h1 className='py-1 font-medium text-2xl'>Salutary Meals</h1>
                    <h3 className='py-2 text-sm font-normal'>"Salutary meals promote health with fresh ingredients and balanced nutrition."</h3>
                    <Link to='/services'>
                        <button className='my-1 bg-black hover:bg-[#6dc234] ease-in-out text-white text-[13px] p-2 px-4'>READ MORE</button>
                    </Link>
                </div>
            </div>

            <div className="dishes mb-8">
                <h1 className='text-center text-[15px] uppercase'>Main Dishes</h1>
                <hr className='w-[3vw] mt-3 mx-auto border-[#6dc234]' />
                <h1 className='text-center text-4xl mb-8'>Our Menu</h1>
                <div className="nxt grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto ">
                    <div className="1 m-8 mb-16 shadow-lg">
                        <img src="/img/Menu.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>imported salmon steak</h1>
                            <h1 className='capitalize p-1.5'>salmon / veggies / oil</h1>
                        </div>
                    </div>
                    <div className="2 m-8 mb-16 shadow-lg">
                        <img src="/img/Hotel21.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>eba and vegetable soup</h1>
                            <h1 className='capitalize p-1.5'>Cassava / veggies / oil</h1>
                        </div>
                    </div>
                    <div className="3 m-8 mb-16 shadow-lg">
                        <img src="/img/Hotel18.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>amala and ewedu with gbegiri</h1>
                            <h1 className='capitalize p-1.5'>Yam / meats / veggies</h1>
                        </div>
                    </div>
                    <div className="5 m-8 mb-16 shadow-lg">
                        <img src="/img/Hotel12.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>Fried eggs with jellof rice</h1>
                            <h1 className='capitalize p-1.5'>egg / rice / veggies</h1>
                        </div>
                    </div>
                    <div className="7 m-8 mb-16 shadow-lg">
                        <img src="/img/Hotel9.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>Egusi soup and pounded yam</h1>
                            <h1 className='capitalize p-1.5'>melon / yam / oil</h1>
                        </div>
                    </div>
                    <div className="8 m-8 mb-16 shadow-lg">
                        <img src="/img/Hotel8.jpg" alt="" className='h-full object-cover'/>
                        <div className="txt bg-slate-400">
                            <h1 className='uppercase font-bold text-[15px] p-1.5 border-b-2 border-black'>White rice and stew</h1>
                            <h1 className='capitalize p-1.5'>rice / meat / tomatoes</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default Restaurant
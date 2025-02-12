import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'
import HotelContext from '../context/HotelContext';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [openMenu,  setOpenMenu] = useState(false)
  const { isAuthenticated, showHide, user, loading } = useContext(HotelContext)
  const navigate = useNavigate()

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' },
  };

  return (
    <>
        <div className="header w-screen hidden lg:flex fixed z-[20000] justify-between p-1 md:p-3 shadow-2xl">
          {isAuthenticated ? (<>
            <Link to='/'>
              <div className="logo flex px-5 font-bold text-lg md:text-2xl text-white hover:text-[#6dc234]">
                  <i className="fa-solid fa-user pt-1 px-2"></i>
                  {/* <h1>Hello {user && user.data.lastName}</h1> */}
                  <h1 className="capitalize">Hello {loading ? <span className='animate-ping'>...</span>:( user.data.lastName)}</h1>
              </div>
            </Link>       
          </>) : (<>          
            <Link to='/'>
              <div className="logo flex px-5 font-bold text-lg md:text-2xl text-white hover:text-[#6dc234]">
                  <i className="fa-solid fa-hotel pt-1 px-2"></i>
                  <h1>Hotel</h1>
              </div>
            </Link>
          </>)}
            <div className="txt text-[15px] font-medium px-4 py-1 flex">
              <Link to='/gallery'>
                  <h1 className='px-2 hover:underline-duration-1000 ease-in-out text-white hover:text-[#6dc234]'>Gallery</h1>
              </Link>
              <Link to='/about'>
                  <h1 className='px-2 text-white hover:text-[#6dc234]'>What Is Hotel?</h1>
              </Link>
              <Link to='/contact'>
                  <h1 className='px-2 text-white hover:text-[#6dc234]'>Contact Us</h1>
              </Link>
              {isAuthenticated ? (<>
                <Link to='/userdashboard'>
                    <h1 className='px-2 text-white hover:text-[#6dc234]'> 
                      <span className='px-1'>Account Center</span>
                    </h1>
                </Link>
              </>) : (<>
                <Link to='/login'>
                    <h1 className='px-2 text-white hover:text-[#6dc234]'> 
                      <span className='px-1'>Login</span>
                    </h1>
                </Link>
                <Link to='/signup'>
                    <h1 className='px-2 text-white hover:text-[#6dc234]'> 
                      <span className='px-1'>SignUp</span>
                    </h1>
                </Link>
              </>)}
            </div>
        </div>
         {/* Second Header */}
      <div className="w-screen flex lg:hidden fixed z-50 justify-between items-center header p-4 shadow-lg">
        {isAuthenticated ? (
          <Link to='/' className="flex items-center px-4 font-bold text-xl text-white hover:text-[#6dc234]">
            <i className="fa-solid fa-user mr-2"></i>
            <h1>Hello {loading ? '...' : user.data.lastName}</h1>
          </Link>
        ) : (
          <Link to='/' className="flex items-center px-4 font-bold text-xl text-white hover:text-[#6dc234]">
            <i className="fa-solid fa-hotel mr-2"></i>
            <h1>Hotel</h1>
          </Link>
        )}

        <GiHamburgerMenu className='text-white text-2xl cursor-pointer mx-4' onClick={() => setOpenMenu(!openMenu)} />
      </div>

      {/* Side Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={sidebarVariants} transition={{ duration: 0.9 }} className="fixed top-0 mt-14 left-0 w-64 h-full header text-white shadow-2xl z-40 pt-12 px-6 space-y-6">
            <Link to='/gallery' className='block pb-3 text-lg hover:text-[#6dc234]'>Gallery</Link>
            <Link to='/about' className='block py-3 text-lg hover:text-[#6dc234]'>What Is Hotel?</Link>
            <Link to='/contact' className='block py-3 text-lg hover:text-[#6dc234]'>Contact Us</Link>
            {isAuthenticated ? (
              <Link to='/userdashboard' className='block py-3 text-lg hover:text-[#6dc234]'>Account Center</Link>
            ) : (
              <>
                <Link to='/login' className='block py-3 text-lg hover:text-[#6dc234]'>Login</Link>
                <Link to='/signup' className='block py-3 text-lg hover:text-[#6dc234]'>Sign Up</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
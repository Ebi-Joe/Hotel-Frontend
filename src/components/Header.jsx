import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'
import HotelContext from '../context/HotelContext';
import useLocalStorage from '../hooks/useLocalStorage';
import AuthContext from '../context/AuthContext';

function Header() {
  const [openMenu,  setOpenMenu] = useState(false)
  const { isAuthenticated, showHide, user, loading } = useContext(HotelContext)
  const [ state, dispatch ] = useContext(AuthContext)
  const { deleteItem } = useLocalStorage("auth-token")
  const navigate = useNavigate()

  const logOut = (e) => {
    e.preventDefault()
    dispatch({ type: "setToken", payload: null })
    deleteItem("auth-token")   
    navigate("/login")
    localStorage.clear();
  }

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
        <div className="header w-screen flex lg:hidden fixed z-[20000] justify-between p-3 shadow-2xl">
          {isAuthenticated ? (<>
              <Link to='/'>
                <div className="logo flex px-5 font-bold text-lg md:text-2xl text-white hover:text-[#6dc234]">
                    <i className="fa-solid fa-hotel pt-1 px-2"></i>
                    <h1>Hello {loading ? ('...'):( user.data.lastName)}</h1>
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
    
          <div className="relative">
              <GiHamburgerMenu className='text-white text-xl mx-4 cursor-pointer'
                  onClick={() => setOpenMenu(!openMenu)}
              />  
          </div>
        </div>

        {openMenu && (
            <div className="fixed left-0 w-[200px] md:w-[250px] top-0 header pt-[5em] p-4 h-screen shadow-lg z-50">
                <div className="txt text-[15px] font-medium px-4 py-1">
                    <Link to='/gallery'>
                        <h1 className='px-2 py-6 hover:underline duration-1000 ease-in-out text-white hover:text-[#6dc234]'>Gallery</h1>
                    </Link>
                    <Link to='/about'>
                        <h1 className='px-2 py-6 text-white hover:text-[#6dc234]'>What Is Hotel?</h1>
                    </Link>
                    <Link to='/contact'>
                        <h1 className='px-2 py-6 text-white hover:text-[#6dc234]'>Contact Us</h1>
                    </Link>
                    {isAuthenticated ? (<>
                        <Link to='/userdashboard'>
                            <h1 className='px-2 py-6 text-white hover:text-[#6dc234]'> 
                              <span className='px-1'>Account Center</span>
                            </h1>
                        </Link>
                      </>) : (<>
                        <Link to='/login'>
                            <h1 className='px-2 py-6 text-white hover:text-[#6dc234]'>Login</h1>
                        </Link>
                        <Link to='/signup'>
                            <h1 className='px-2 py-6 text-white hover:text-[#6dc234]'>SignUp</h1>
                        </Link>
                      </>)}
                </div>
            </div>
        )}
    </>
  )
}

export default Header
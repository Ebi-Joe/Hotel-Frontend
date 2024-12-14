import React from 'react'

function LogOut() {
  return (
    <>
        <div className="logout py-20 text-center">
            <div className="icn">
                <i className="fa-solid fa-right-from-bracket text-6xl bg-slate-300 rounded-full p-10"></i>
                <h2 className='text-3xl py-7 font-semibold'>Logout</h2>
            </div>
            <div className="txt">
                <h2 className='text-lg font-medium'>Hi user@gmail.com,</h2>
                <h2 className='text-lg font-medium py-3'>Are you sure you want to logout from Hotel.com?</h2>
            </div>
            <div className="btn">
                <button className='m-4 bg-slate-300 p-3 px-16 border-2 border-black'>Yes</button>
                <button className='m-4 bg-[white] p-3 px-16 border-2 border-black'>No</button>
            </div>
        </div>
    </>
  )
}

export default LogOut
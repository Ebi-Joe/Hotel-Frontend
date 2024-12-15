import React from 'react'

function Loader() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center ">
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="font-bold text-3xl mt-4">Loading...</h2>
        <p className="text-zinc-600 font-semibold text-lg">Your adventure is about to begin</p>
      </div>
    </div>
    </>
  )
}

export default Loader
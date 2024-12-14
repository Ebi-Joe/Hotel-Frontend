import React from 'react'

function Modal({className,children}) {
  return (
    <>
        
        <div  className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in modalBg ${className}`}>
        <div className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${className}`}>
            <div className={`relative transform overflow-hidden rounded-2xl text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 modalContainer ${className}`}>
                {children}
            </div>
        </div>
    </div>

    </>
  )
}

export default Modal
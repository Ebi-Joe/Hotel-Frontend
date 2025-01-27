import React from 'react'

function Contact() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:ebijoe911@gmail.com';
    };

  return (
    <>
        <div className="contact py-12">
            <h1 className='uppercase text-center tracking-widest'>Get In Touch</h1>
            <hr className='w-[5vw] mt-3 mx-auto border-[#6dc234] text-center' />
            <h3 className='text-center text-4xl py-2'>Drop Us A Line</h3>

            <div className=" md:flex justify-center items-center py-9">
                <div className="txt px-3">
                    <div className='address flex justify-between'>
                        <h1 className='font-bold'>Address:</h1>
                        <h2 className=''>Avenue Str. 3</h2>
                    </div>

                    <div className='address flex justify-between'>
                        <h1 className='font-bold'>City:</h1>
                        <h2 className=''>Lagos</h2>
                    </div>

                    <div className='address flex justify-between'>
                        <h1 className='font-bold '>Check-In:</h1>
                        <h2 className=''>2:00 pm</h2>
                    </div>
                </div>

                <div className="txt px-3">
                    <div className='address flex justify-between'>
                        <h1 className='font-bold '>Phone:</h1>
                        <a href="tel:+2349012437740">+234 901 243 7740</a>
                    </div>
                    <div className='address flex justify-between'>
                        <h1 className='font-bold '>Email:</h1>
                        <button onClick={handleEmailClick}>
                            supporthotel@gmail.com
                        </button>
                    </div>

                    <div className='address flex justify-between'>
                        <h1 className='font-bold '>Check-Out:</h1>
                        <h2 className=''>12:00 pm</h2>
                    </div>
                </div>
            </div>

            <div className="avail">
                <h1 className='text-center text-[14px] py-2'>available at: 8am - 10pm</h1>
                <a href="tel:+2349012437740">
                    <h2 className='text-center text-4xl'>+234 901 243 7740</h2>
                </a>
            </div>

        </div>
    </>
  )
}

export default Contact;
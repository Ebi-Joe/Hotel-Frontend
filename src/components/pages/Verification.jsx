import React, { useState } from 'react'
import Header from '../Header'
import { GrValidate } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';

function Verification() {
    const [error, setError] = useState('');
    const [good, setGood] = useState('');
    const [loading, setLoading] = useState(false)
    const redirect = useNavigate()

    const params = useParams();
    const token = params.token

   const handlerVerify = async (e) => {
        e.preventDefault()
        setError('')
        setGood('')
        setLoading(true)

        try {
            const res = await fetch("http://localhost:8000/api/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ token })
            })
            const data = await res.json();
            if (res.ok) {
                setGood("Email Verification Successful!!")
                redirect("/login")
            }else {
                console.log(data);
                
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("An Error Was Encountered While Resetting Password")
                }
            }
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
   }

  return (
    <>
        <div className="flex items-center justify-center">
            {error && <div className="error-message fixed text-white bg-red-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
        <Header/>
        <div className="py-20">
            <div className="max-w-[23rem] py-10 mx-auto grid place-items-center text-center rounded-lg shadow-xl bg-yellow-100">
                <GrValidate className='bg-green-600 text-8xl animate-bounce rounded-full text-white p-2 ' />
                <h1 className='text-5xl font-bold m-6'>Thank You For Your Registration</h1>
                <p className='py-3 px-8 text-gray-600 font-semibold'>To Verify your Account, click the button below The link will self-destruct after Twenty-Four hour.</p>
                <form action="" onSubmit={handlerVerify}>
                    <div className="btn py-8">
                        <button disabled={loading} className='bg-green-600 text-white font-semibold py-2 px-7 rounded-lg'>{loading ? "Completing Registration.." : "Complete Your Registration"}</button>
                    </div>
                </form> 
                <p className='px-6 py-3 text-gray-500'>You're have been directed to this page because you recently created an account in HOTEL web app. Follow the prompts on this page to verify your account.</p>
            </div>            
      </div>
    </>
  )
}

export default Verification
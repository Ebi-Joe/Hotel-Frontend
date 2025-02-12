import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('Guest')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [good, setGood] = useState('')

  const signUpHandler  = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError('')
    setGood('')
     
    try {
      const res = await fetch ("https://hotel-backend-itqc.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          role,
        })
      })
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setGood("User Has Been Registered Successfully, and a mail has been sent to you address");
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setRole('')
      }else {
        if (data.message ) {
          setError(data.message)
        } else {
          setError("An error occurred. Please try again.");
        }
      }
      
    } catch (error) {
      console.log(error)
    } finally {
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
      <div className="signup place-content-center mx-8 flex py-24">
        <div className="sign bg-[white] h-fit pb-6 rounded-xl shadow-2xl">
          <div className="one py-4">
            <h1 className='text-center text-3xl font-[SuisseBPIntl,sans-serif]'>Sign up to Hotel</h1>
            <h2 className='text-center text-[15px] text-[grey] font-[SuisseBPIntl,sans-serif]'>And start benefiting from our loyalty program</h2>
          </div>

          <div className="two">
            <form onSubmit={signUpHandler} action="">
              <div className="form1 mx-8 px-1 py-2">
                <div className="1 px-1">
                  <label className='' htmlFor="">First name</label>
                  <input onChange={(e) => setFirstName(e.target.value)} className='border block p-2 rounded w-full' type="text" placeholder='First name' value={firstName} required />
                </div>

                <div className="2 px-1">
                  <label className='' htmlFor="">Last name</label>
                  <input onChange={(e) => setLastName(e.target.value)} className='border block p-2 rounded w-full' type="text" placeholder='Last name' value={lastName} required/>
                </div>
              </div>

              <div className="form2 mx-8 px-1">
                <label className='py-12' htmlFor="">Your Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border block p-2 rounded w-full' type="text" placeholder='Email' value={email} required/>
              </div>

              <div className="4  mx-8 py-2 px-1">
                <div className="1 px-1">
                  <label htmlFor="">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} className='border block p-2 my-2 rounded w-full' type="password" name="" id="" placeholder='Password' value={password}/>
                </div>

                <div className="2 px-1">
                  <label htmlFor="">Confirm Password</label>
                  <input onChange={(e) => setConfirmPassword(e.target.value)} className='border block p-2 my-2 rounded w-full' type="password" name="" id="" placeholder='Confirm password' value={confirmPassword}/>
                </div>
              </div>

              <div className="form2 mx-8 px-1 pb-3">
                <label className='py-12' htmlFor="">Role</label>
                <select onChange={(e) => setRole(e.target.value)} name="" id="" className='border block p-2 rounded w-full' value={role}>
                  <option value="Guest">Guest</option>
                </select>
              </div>

              <div className="agree py-2 mx-8 px-1 text-[13px] font-semibold">
                <input type="checkbox" name="" id="" required />
                <label htmlFor="">I agree to Hotel Terms and Privacy Policy</label>
              </div>

              <div className="up py-2 mx-8 px-1 text-[13px] font-semibold">
                <input type="checkbox" name="" id="" required />
                <label htmlFor="">Yes! I want to be the first to hear about Hotel's exclusive offers, news, events, and updates.</label>
              </div>

              <div className="btn text-center py-2">
                <button disabled={loading} className='bg-[black] text-white font-bold text-[15px] px-4 p-2 rounded-full'>{loading ? "Signing Up!..." : "Sign Up"}</button>
              </div>

            </form>

            <div className="log">
              <h1 className='text-center text-[13px] font-semibold'>Already have an account? <Link to='/login' className='underline'>Log in</Link></h1>
            </div>
          </div>
        </div>    
      </div>
    </>
  )
}

export default Signup
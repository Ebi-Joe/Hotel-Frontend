import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useContext(AuthContext)
  const navigate  = useNavigate()
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState('')
  const [good, setGood] = useState('')

  const SubmitHandler = async (e) => {
    e.preventDefault()
    setError('')
    setGood('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:8000/api/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
      })
      const data = await res.json()
      
      if (res.ok) {
        setGood("User Logged In Successfully")  
        localStorage.setItem('auth-token',data.token)
        dispatch({type:'LOGIN',payload:data})
        setTimeout(() => {
          if (data.user.role === 'Guest') {
              navigate('/');
              window.location.reload()
          } else {
              navigate('/admin');
              window.location.reload()
          }
        }, 2000);
        setEmail("")
        setPassword('') 
      } else {
        if (data.message) {
          if (data.message === "User  account is not verified. A verification email has been sent.") {
              setGood("A verification email has been sent. Please check your inbox.");
          } else {
              setError(data.message);
          }
      } else {
          // Handle other responses
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
      <div className="login flex py-24">
      <div className="sign bg-[whitesmoke] mx-8 md:ml-[7.3em] md:w-[27.4vw] md:h-[96vh] rounded-l-xl">
          <div className="one py-4">
            <h1 className='text-center text-3xl font-[SuisseBPIntl,sans-serif]'>Login to Hotel</h1>
            <h2 className='text-center text-[15px] px-8 py-8 text-[grey] font-[SuisseBPIntl,sans-serif]'>Log in to get personalized content recommendations, destinations and events you love and quick booking</h2>
          </div>

          <div className="two">
            <form onSubmit={SubmitHandler} action="">

              <div className="form1 mx-8 px-1">
                <label htmlFor="">Your Email Address</label>
                <input className='border block p-2 rounded w-full' onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' required/>
              </div>

              <div className="form2 mx-8 pt-2 px-1">
                <label htmlFor="">Password</label>
                <input className='border block p-2 mt-2 rounded w-full' onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" placeholder='Password'/>
              </div>

              <div className="mx-8 text-sm font-semibold px-1 text-end">
                <Link to="/forgotPassword">
                  <label htmlFor="" className='cursor-pointer text-red-600 hover:underline'>Forgot Password?</label>
                </Link>
              </div>  

              <div className="btn text-center py-2">
                <button disabled={loading} className='bg-[black] text-white font-bold text-[15px] px-4 p-2 rounded-full'>{loading ? "Logging In...." : "Login"}</button>
              </div>

            </form>

            <div className="log py-6">
              <h1 className='text-center text-[13px] font-semibold'>Not a member? <Link to='/signup' className='underline'>Sign up now</Link></h1>
            </div>
          </div>
        </div>

      <div className="nxt w-[54vw] h-[65vh] hidden md:block">
          <div className="img">
            <img src="/img/Hotel16.avif" alt="" className='w-[54vw] h-[65vh] rounded-tr-xl'/>
          </div>
          <div className="txt bg-[lightyellow] h-[31vh] rounded-br-xl flex">

            <h3 className='font-bold text-2xl px-8 py-8'>Meet Luna <br /> Nueva <span className='font-semibold text-2xl'> our <br />new loyalty <br /> program</span></h3>
            <div className="txt py-8 ">
              <h3 className='py-3 text-sm font-semibold'>Sign up to Hotel and start benefiting from our membership (loyalty program)</h3>
              <div className="list">
                <ul className='grid grid-cols-2 text-[14px]'>
                  <li>Complimentary Welcome Drink</li>
                  <li>Authentic Local Experiences</li>
                  <li>Free Wellness Activity</li>
                  <li>Members Rates @ Hotel Retail Shops</li>
                  <li>Access to Global Book Exchange</li>
                  <li>Earn Tokens via Volunteering Activities</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default Login
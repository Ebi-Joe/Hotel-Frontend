import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [good, setGood] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get('redirect')

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setGood('');
    setLoading(true);

    try {
      const res = await fetch('https://hotel-backend-itqc.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        setGood('User Logged In Successfully');
        localStorage.setItem('auth-token', data.token);
        dispatch({ type: 'LOGIN', payload: data });
        setEmail('');
        setPassword('');

        setTimeout(() => {
          if (redirectPath && redirectPath !== '/login') {
            navigate(redirectPath);
            window.location.reload();
          } else if (data.user.role === 'Admin') {
            navigate('/hotelControllerDash');
            window.location.reload();
          } else {
            navigate('/');
            window.location.reload();
          }
        }, 2000);
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.log(error);
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
            {error && <div className="error-message fixed text-white bg-red-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{error}</div>}
        </div>
        <div className="flex items-center justify-center">
            {good && <div className="good-message fixed text-white bg-green-500 text-center font-bold text-xl m-4 p-2 mt-[10em] rounded-lg">{good}</div>}
        </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        <div className="p-8 md:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">Login to Hotel</h1>
          <p className="text-gray-600 text-center mb-8">
            Log in to get personalized content recommendations, destinations, and events you love.
          </p>

          <form onSubmit={SubmitHandler}>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email Address</label>
              <input 
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input 
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <div className="text-right mb-4">
              <Link to="/forgotPassword" className="text-blue-500 hover:underline text-sm">Forgot Password?</Link>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300"
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Not a member? <Link to="/signup" className="text-blue-500 hover:underline">Sign up now</Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2 relative">
          <img src="/img/Hotel16.avif" alt="Hotel" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 bg-yellow-100 p-6 w-full rounded-t-xl">
            <h3 className="text-2xl font-bold">Meet Luna Nueva</h3>
            <p className="text-gray-700 text-sm mt-2">
              Sign up to Hotel and start benefiting from our loyalty program:
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm grid grid-cols-2 gap-x-4">
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
    </>
  );
}

export default Login;

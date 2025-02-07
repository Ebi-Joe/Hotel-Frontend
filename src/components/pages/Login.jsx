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
  const redirectPath = params.get('redirect') || '/';

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setGood('');
    setLoading(true);

    try {
      const res = await fetch('https://hotel-backend-itqc.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setGood('User Logged In Successfully');
        localStorage.setItem('auth-token', data.token);
        dispatch({ type: 'LOGIN', payload: data });
        setTimeout(() => {
          if (redirectPath && redirectPath !== '/login') {
            navigate(redirectPath);
            window.location.reload()
          } else if (data.user.role === 'Admin') {
            navigate('/Admin');
            window.location.reload()
          } else {
            navigate('/');
            window.location.reload()
          }
        }, 1000);
        setEmail('');
        setPassword('');
      } else {
        if (data.message) {
          if (
            data.message ===
            'User  account is not verified. A verification email has been sent.'
          ) {
            setGood('A verification email has been sent. Please check your inbox.');
          } else {
            setError(data.message);
          }
        } else {
          setError('An error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.log(error);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {error && (
        <div className="fixed top-4 bg-red-500 text-white text-center font-bold text-lg px-4 py-2 rounded-lg shadow-md">
          {error}
        </div>
      )}
      {good && (
        <div className="fixed top-4 bg-green-500 text-white text-center font-bold text-lg px-4 py-2 rounded-lg shadow-md">
          {good}
        </div>
      )}
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-4">Login to Hotel</h1>
          <p className="text-center text-gray-600 mb-8">
            Log in to get personalized content recommendations, destinations, and quick booking.
          </p>

          <form onSubmit={SubmitHandler} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-right text-sm">
              <Link to="/forgotPassword" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            Not a member?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up now
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/img/Hotel16.avif"
            alt="Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-100 p-6 rounded-t-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Meet Luna Nueva</h3>
            <p className="text-sm text-gray-700 mb-4">
              Sign up to Hotel and start benefiting from our membership loyalty program.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
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
  );
}

export default Login;

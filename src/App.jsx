import { useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Login from "./components/pages/Login";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery'
import Restaurant from './components/pages/Restaurant';
import Services from './components/pages/Services';
import Terms from './components/pages/Terms';
import { HotelProvider } from './context/HotelContext';
import LogOut from './components/pages/LogOut';
import Testimonials from './components/pages/Testimonials';
import Room from './Admin/Room';
import Concierge from './Admin/Concierge';
import NewConcierge from './Admin/NewConcierge';
import Dashboard from './Admin/Dashboard';
import RoomDetails from './components/pages/RoomDetails';
import Search from './components/pages/Search';
import GuestOrders from './Admin/GuestOrders';
import NewGuestOrder from './Admin/NewGuestOrder';
import GuestList from './Admin/GuestList';
import Reviews from './Admin/Reviews';
import NewReview from './Admin/NewReview';
import BookingPage from './components/pages/BookingPage';
import ForgotPassword from './components/pages/ForgotPassword';
import { AuthProvider } from './context/AuthContext';
import RoomType from './Admin/RoomType';
import NewRoom from './Admin/NewRoom'
import NewGuest from './Admin/NewGuest';
import Availability from './components/pages/Availability';
import Contacts from './Admin/Contacts';
import Unauthorized from './components/pages/Unauthorized'
import Fpassword from './components/pages/Fpassword';
import ResetPassword from './components/pages/ResetPassword';
import Verification from './components/pages/Verification';
import ThankYou from './components/pages/ThankYou';
import Delete from './components/pages/Delete';
import UserDash from './components/pages/UserDash';

function App() {
  const [loader, setLoader] = useState(true);
  const token = localStorage.getItem('auth-token')
  const authInitialToken = {auth_token: token ?? null}
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000)
    return () => timer
  }, [])

  return (
    <>
      {loader ? ( <Loader/>
      ) : (
        <AuthProvider defaultState={authInitialToken}>
        <HotelProvider>
          <Router>
          <Routes>
            <Route path="/delete" element={<>
              <Delete/>
            </>}/>

            <Route path='/forgot' element={<>
              <ForgotPassword/>
            </>}/>  

            <Route path='/api/userVerification/:token' element={<>
              <Verification/>
            </>}/>

            <Route path='/forgotPassword' element={<>
              <Fpassword/>
            </>}/>

            <Route path='/api/reset-password/:token' element={<>
              <ResetPassword/>
            </>}/>

            <Route path = "/api/verify/:token" element={<>
              <Verification/>
            </>}/>

            <Route path='/' element={<>
              <Home/>
            </>}/>

            <Route path='/bookingPage' element={<>
              <BookingPage/>
            </>}/>

            <Route path='/restaurant' element={<>
              <Restaurant/>
            </>}/>

            <Route path='/services' element={<>
              <Services/>
            </>}/>

            <Route path='/TandC' element={<>
              <Terms/>
            </>}/>

            <Route path='/gallery' element={<>
              <Header/>
              <Gallery/>
              <Footer/>
            </>}/>

            <Route path='/about' element={<>
              <Header/>
              <About/>
              <Footer/>
            </>}/>

            <Route path='/contact' element={<>
              <Header/>
              <ContactUs/>
              <Footer/>
            </>}/>

            <Route path='/testimonials' element={<>
              <Testimonials/>
            </>}/>

            <Route path='/search' element={<>
              <Search/>
            </>}/>

            <Route path='/availability' element={<>
              <Availability/>
            </>}/>


            <Route path='/roomGallery/:id' element={<>
              <RoomDetails/>
            </>}/>
            
            <Route path='/signup' element={<>
              <Header/>
              <Signup/>
              <Footer/>
            </>}/>            

            <Route path='/login' element={<>
              <Header/>
              <Login/>
              <Footer/>
            </>}/>

            <Route path='/logout' element={<>
              <Header/>
              <LogOut/>
              <Footer/>
            </>}/>

            <Route path='/hotelControllerDash' element={
                <>
                  <Dashboard />
                </>
            }/>

            <Route path='/guestorders' element={
                <>
                  <GuestOrders/>
                </>
            }/>

            <Route path='/guestList' element={
                <>
                  <GuestList/>
                </>
            }/>

            <Route path='/roomTypes' element={
              <>
                <RoomType/>
              </>
            }/>

            <Route path='/room' element={
              <>
                <Room/>
              </>
            }/>

            <Route path='/contacts' element={
              <>
                <Contacts/>
              </>
            } />

            <Route path='/concierge' element={
              <>
                <Concierge/>
              </>
            }/>

            <Route path='/review' element={
              <>
                <Reviews/>
              </>
            }/>

            <Route path='/newConcierge' element={
              <>
                <NewConcierge/>
              </>
            }/>

            <Route path='/newGuestOrders' element={
              <>
                <NewGuestOrder/>
              </>
            }/>

            <Route path='/newGuest' element={
              <>
                <NewGuest/>
              </>
            }/>

            <Route path='/newReview' element={
              <>
                <NewReview/>  
              </>
            }/>

            <Route path='/newRoom' element={
              <>
                <NewRoom/>
              </>
            }/>

            <Route path='/unauthorized' element={<>
              <Unauthorized/>
            </>}/>

            <Route path='/thankYou' element={<>
              <ThankYou/>
            </>}/>

            <Route path='/userdashboard' element={<>
              <UserDash/>
            </>}/>
            
          </Routes>
        </Router>
        </HotelProvider>
        </AuthProvider>
      )}  
    </>
  )
}

export default App

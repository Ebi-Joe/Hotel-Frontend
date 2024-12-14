import React from 'react'
import Banner from '../Banner'
import Header from '../Header'
import Page from '../Page'
import Serve from '../Serve'
import Elegant from '../Elegant'
import Review from '../Review'
import Excellent from '../Excellent'
import Footer from '../Footer'
import Rooms from '../Rooms'
import Contact from '../Contact'
import { HotelProvider } from '../../context/HotelContext'

function Home() {
  return (
    <>
        <HotelProvider>
          <Header/>
          <Banner/>
          <Page/>
          <Serve/>
          <Elegant/>
          <Rooms/>
          <Review/>
          <Excellent/>
          <Contact/>
          <Footer/>
        </HotelProvider>
    </>
  )
}

export default Home

            
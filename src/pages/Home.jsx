import React from 'react'
import Membership from '../components/Room/Membership'
import RoomHome from '../components/Room/RoomHome'
import './homee.css'

import HeroSection from '../container/HeroSection'
import About2 from '../components/About/About2'
import Restaurant from '../components/Restaurant/Restaurant'
import Promo from '../components/Promo/Promo'
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Navbar/Header'


const Home = () => {
  return (
    <>
        <Navbar />
         <Header />
      <HeroSection />
      <About2 />
      <div className='back'>
        <RoomHome />
        <Membership />
      </div>
      <Restaurant />
      <Promo />
      <Location />
      <Footer />
    </>
  )
}

export default Home
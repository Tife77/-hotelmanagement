import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import {  Route, Routes ,Navigate} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
// import Header from './components/Navbar/Header'
import RoomPage from './components/Room/RoomPage'
import Ammenity from './components/Ammenity/Ammenity'
import Login from './components/Log/Login'
// import Header from './components/Navbar/Header'
import LocationHome from './components/Location/LocationHome'
import RoomDetails from './components/Room/RoomDetails'
import Confirmation from './components/Confirmation/Confirmation'
import BookingDetails from './components/BookingDetails/BookingDetails'
import SignUp from './components/Log/SignUp'

const App = () => {
  return (
    <>
    {/* <Navbar />
    <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/hotelinfo" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/rooms" element={<RoomPage />} />
      <Route path="/ammenity" element={<Ammenity />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/location" element={<LocationHome />} />
      <Route path="/roomDetails" element={<RoomDetails />} />
      <Route path="/confirmationpage" element={<Confirmation />} />
      <Route path="bookingDetails" element={<BookingDetails />} />
    </Routes>
    </>
  )
}

export default App
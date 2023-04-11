import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {  Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Navbar/Header'
import RoomPage from './components/Room/RoomPage'
import Ammenity from './components/Ammenity/Ammenity'

const App = () => {
  return (
    <>

    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/hotelinfo" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/rooms" element={<RoomPage />} />
      <Route path="/ammenity" element={<Ammenity />} />
    </Routes>
    </>
  )
}

export default App
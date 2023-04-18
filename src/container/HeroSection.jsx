import React from 'react'
import Carousel from './Carousel'
import DataDump from './DataDump'
import "./Home.css"

const HeroSection = () => {
  return (
    <>
        <Carousel slides={DataDump}/>
    </>
  )
}

export default HeroSection
import React, { useState } from 'react'
import DataDump from './DataDump'
import {motion} from 'framer-motion'
import "./Home.css"


const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const next = ()=> {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prev = ()=> {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0 ){
        
        return null
    }
    

  return (
    <>
        <section className='slider'>
            <div className='control-btn'>
                <button className='prev' onClick={prev}>
                    <i className='fas fa-caret-left'></i>
                </button>
                <button className='next' onClick={next}>
                    <i className='fas fa-caret-right'></i>
                </button>
            </div>
            {DataDump.map((slide, index) =>{
                return(
                    <div className= {index === current ? "slide active" : "slide"} key = {index}>
                        {index === current  && <img src={slide.images} alt="" /> }
                    </div>
                )
            })}
        </section>
        
        <motion.section className='slide-form'
            initial={{ x: 100}}
            animate={{x: 0}}
            >
            <div className='container'>
                <h2>Do enjoy your stay!!!</h2>
                <span>Find and reserve your accommodations</span>

                <form action="">
                    <input type="text" placeholder='Find a Room' name='' id='' />
                    <div className="space">
                        <input type="date" placeholder='Check In' name="" id="" />
                        <input type="date" placeholder='Check Out' name="" id="" />
                    </div>
                    <div className="space">
                        <input type="number" placeholder='Adult(s)(+18)' name="" id="" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"/>
                        <input type="number" placeholder='Children(0 - 17)' name="" id="" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"/>
                    </div>
                    <input type="number" placeholder='Rooms' name="" id="" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"/>
                    <input type="submit" value = 'Search' className='submit'/>
                </form>
            </div>
        </motion.section>
    </>
  )
}

export default Carousel
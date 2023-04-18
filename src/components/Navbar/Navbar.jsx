import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


import './Navbar.css'

const Navbar = () => {
  const [click, setClick] =  useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = ( )=> setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='container space'>
          <div className='menu-icon' onClick={handleClick}>
          <i className={ click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li><Link to= '/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to= '/rooms' onClick={closeMobileMenu}>Rooms</Link></li>
            <li><Link to= '/hotelinfo' onClick={closeMobileMenu}>Hotel Info</Link></li>
            <li><Link to= '/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
            <li><Link to= '/location' onClick={closeMobileMenu}>Location</Link></li>
            <li><Link to= '/events' onClick={closeMobileMenu}>Events</Link></li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to='/sign-up'>
              <i className='fa fa-chevron-right'>Sign Up</i> 
              </Link>
            </li>
            <li>
              <Link to='/sign-in'>
               <i className='fa fa-chevron-right'>Sign In</i> 
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <motion.button 
                  className='primary-btn'
                  whileHover={{scale: 1}}
                  whileTap={{scale: 0.9}}
                  >
                    Book Now
                  </motion.button>
              </Link>
            </li>
          </div>
        </div>
      </nav>  
    </>
  )
}

export default Navbar

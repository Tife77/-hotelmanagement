import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Header = () => {
  return (
    <>
        <header>
          <div className="container space">
            <div className='hotel_logo'>
               <img src="" alt="" />
            </div>

            <div className="container space">
              <div className='box space'>
                <div className='icons'>
                  <i className='far fa-clock'></i>
                </div>
              
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contactus">Mondays - Sunday: 7.00am to 6.00pm</Link>
              </div>
            </div>

              <div className='box space'>
                <div className='icons'>
                  <i className='fas fa-phone-volume'></i>
                </div>
              
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contactus">Mondays - Sunday: 7.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box space'>
                <div className='icons'>
                  <i className='far fa-envelope'></i>
                </div>
              
              <div className="text">
                <h4>Email us </h4>
                <Link to="/contactus">info@gmail.com</Link>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header
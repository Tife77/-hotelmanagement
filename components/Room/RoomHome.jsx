import React from 'react'
import { Link } from 'react-router-dom'
import './Room.css'

const RoomHome = () => {
  return (
       
        <div className="roomHome container top ">
          <div className='heading'>
            <h2>Our <span>Rooms</span> and <span>Suites</span></h2>
            <div className="line"></div>
          </div>
          <div className="flexrow">
            <div className='row2 tops'>
              <div className="roomCard">
                <img src='/images/gallery-1.jpg' alt="" width="100%" />
                <div className="roomText">
                  <Link to=""><p>Guest Rooms</p></Link>
                </div>
              </div>
            </div>

            <div className='row2 tops'>
              <div className="roomCard">
                <img src='/images/gallery-3.jpg' alt="" width="100%" />
                <div className="roomText">
                  <Link to=""><p>Suites</p></Link>
                </div>
              </div>
            </div>

            <div className='row2 tops'>
              <div className="roomCard">
                <img src='/images/gallery-5.jpg' alt="" width="100%" />
                <div className="roomText">
                  <Link to=""><p>Executive</p></Link>
                </div>
              </div>
            </div>
          </div>
          <button className='secondary-btn'>View All Rooms</button>
        </div>
    

  )
}

export default RoomHome
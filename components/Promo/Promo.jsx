import React from 'react'
import {Link} from 'react-router-dom'
import './Promo.css'
const Promo = () => {
  return (
    <div>
        <div className="big-container top">
           <div className='container'>
                <div className="promo">
                    <div className='left3'>
                        <h2>Event Planning and Function</h2>
                    </div>
                    <div className='right3'>
                        <p>We have the stylish space and resources you need for your next gathering. Keep your attendees together by reserving 10 - 25 rooms instantly online.</p>
                        <div className="promo_btn">
                            <Link to=''><p>Book Event</p></Link>
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    </div>
  )
}

export default Promo
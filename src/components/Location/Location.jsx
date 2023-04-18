import React from 'react'
import './Location.css'

const Location = () => {
  return (

    <div className="location top ">
          <div className='heading'>
            <h2>How to find Us</h2>
            <div className="line"></div>
          </div>
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7328.901138856608!2d3.7197325061432123!3d6.890505691257368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd83e8084cc6d%3A0x60665ad283166878!2sBabcock%20Guest%20House!5e0!3m2!1sen!2sng!4v1681151187797!5m2!1sen!2sng"
           width="100%" height="550"  allowfullscreen="true" loading="" 
          referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>

  )
}

export default Location
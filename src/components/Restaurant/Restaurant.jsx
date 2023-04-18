import React from 'react'
import {Link} from 'react-router-dom'
import './Restaurant.css'
const Restaurant = () => {
  return (
    <div className='container '>
        <div className="restaurant">
        <div className='left2'>
            <img src="/images/gallery3.jpg" alt="" />
        </div>
        <div className='right2'>
            <h2>Our Restaurant</h2>
            <p>Explore our restaurants for traditional Nigerian, oriental, Mongolian, and Mediterranean cuisines. Fulani Pool Bar offers barbecue, our piano lounge serves light snacks, and the Pastry Shop stocks fresh baking.</p>
            <div className="restaurant_btn">
                <Link to=''><p>Check Menu</p></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Restaurant
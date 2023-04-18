import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import "./LocationHome.css"
import { Audio } from  'react-loader-spinner'
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'
import BounceLoader from "react-spinners/BounceLoader";



const LocationHome = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)

    }, [])

  return (
    <>
    <Navbar />
    <Header />
    {
        loading?
        <div className='loaderCenter'>
        <BounceLoader
        color="#31b675"
        loading={loading}
        size={80}
        />
        </div>
            :
            <> 
    <Title />
        <div className="locations top ">
          <div className='heading'>
            <h2>Where <span>to</span> find <span>us</span></h2>
            <div className="line"></div>
          </div>
          {/* <div className="containers"> */}
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7328.901138856608!2d3.7197325061432123!3d6.890505691257368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd83e8084cc6d%3A0x60665ad283166878!2sBabcock%20Guest%20House!5e0!3m2!1sen!2sng!4v1681151187797!5m2!1sen!2sng"
           width="100%" height="550"  allowfullscreen="true" loading="" 
          referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        {/* </div> */}
        </div>
        <div className='transport'>
        <div className='heading'>
            <h2>Offers</h2>
            <div className="line"></div>
          </div>
        <div className='seccontainer'>
            <div className='lefter'>
                <div className='transportHead'>
                    <h2>Parking</h2>
                </div>
                <div className="transportList1">
                    <ul className='boldList'>
                        <li>Valet Parking:</li>
                        <li>Parking Fee:</li>
                        <li>Parking Priviledges:</li>
                        <li>Security:</li>
                        <li>Lot Size:</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>No Valet Parking</li>
                        <li>No Fees</li>
                        <li>Parking is free </li>
                        <li>Cars are monitored </li>
                        <li>45 Vehicles</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className='centerer'>
            <div className='transportHead'>
                    <h2>Transport Means</h2>
                </div>
                <div className="transportList1">
                    <ul className='boldList'>
                        <li>Shagamu Bus Park:</li>
                        <li>Airport:</li>
                        <li>Ilishan Park:</li>
                    </ul>
                    <ul>
                        <li>5 miles</li>
                        <li>No Airport</li>
                        <li>3 miles </li>
                    </ul>
                </div>
            </div>
            <div className='righter'>
            <div className='transportHead'>
                    <h2>Nearby Sights</h2>
                </div>
                <div className="transportList1">
                    <ul className='boldList'>
                        <li>Amusement Park:</li>
                        <li>Olumo Rock:</li>
                        <li>Train Station:</li>
                        <li>Presidential Library:</li>
                        <li>Wildlife Park:</li>
                    </ul>
                    <ul>
                        <li>6 miles</li>
                        <li>9 miles</li>
                        <li>7 miles</li>
                        <li>4 miles</li>
                        <li>3 miles</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </>
        }
        <Footer />
    </>
  )
}

export default LocationHome
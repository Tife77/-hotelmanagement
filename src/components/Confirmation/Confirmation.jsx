import React, {useState, useEffect} from 'react'
import { Audio } from  'react-loader-spinner'
import { Link, NavLink } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Navbar from '../Navbar/Navbar'
import Header from '../Navbar/Header'

import "./Confirmation.css"

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

const Confirmation = () => {
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

    <div className='confirm'>
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
      {/* <Title /> */}
      <hr />
      <div className="container bookConfirm">
        
        <div><h2>Success!!!</h2></div>
        <div className='successIcon'>
            <svg width="400" height="400" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28.5" cy="28.5" r="28.5" fill="#31b675" fill-opacity="0.3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.12891 28.4873C3.12891 14.4399 14.5166 3.05225 28.564 3.05225C42.6113 3.05225 53.999 14.4399 53.999 28.4873C53.999 42.5346 42.6113 53.9224 28.564 53.9224C14.5166 53.9224 3.12891 42.5346 3.12891 28.4873ZM37.993 21.6018C38.9863 22.5951 38.9863 24.2056 37.993 25.1988L28.6258 34.566C27.1869 36.0049 24.854 36.0049 23.4151 34.566L19.1349 30.2858C18.1416 29.2926 18.1416 27.682 19.1349 26.6888C20.1282 25.6956 21.7387 25.6956 22.732 26.6888L26.0205 29.9773L34.396 21.6018C35.3892 20.6085 36.9998 20.6085 37.993 21.6018Z" fill="#31b675"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.12891 28.4873C3.12891 14.4399 14.5166 3.05225 28.564 3.05225C42.6113 3.05225 53.999 14.4399 53.999 28.4873C53.999 42.5346 42.6113 53.9224 28.564 53.9224C14.5166 53.9224 3.12891 42.5346 3.12891 28.4873ZM37.993 21.6018C38.9863 22.5951 38.9863 24.2056 37.993 25.1988L28.6258 34.566C27.1869 36.0049 24.854 36.0049 23.4151 34.566L19.1349 30.2858C18.1416 29.2926 18.1416 27.682 19.1349 26.6888C20.1282 25.6956 21.7387 25.6956 22.732 26.6888L26.0205 29.9773L34.396 21.6018C35.3892 20.6085 36.9998 20.6085 37.993 21.6018Z" fill="#31b675"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.12891 28.4873C3.12891 14.4399 14.5166 3.05225 28.564 3.05225C42.6113 3.05225 53.999 14.4399 53.999 28.4873C53.999 42.5346 42.6113 53.9224 28.564 53.9224C14.5166 53.9224 3.12891 42.5346 3.12891 28.4873ZM37.993 21.6018C38.9863 22.5951 38.9863 24.2056 37.993 25.1988L28.6258 34.566C27.1869 36.0049 24.854 36.0049 23.4151 34.566L19.1349 30.2858C18.1416 29.2926 18.1416 27.682 19.1349 26.6888C20.1282 25.6956 21.7387 25.6956 22.732 26.6888L26.0205 29.9773L34.396 21.6018C35.3892 20.6085 36.9998 20.6085 37.993 21.6018Z" fill="#31b675"/>
            </svg>
        </div>
        <div>
            <div className='linktofro'>
                <h3 className='successText'>Your Room has successfully been booked</h3>
                <Link to="/bookingDetails"><p>Check Booking Details Here&gt;</p></Link>
                <Link to="/roomDetails"><p>&lt;Go back</p></Link>
            </div>
        </div>
      </div>
      </>
        }
        <Footer />
    </div>
    </>
  )
}

export default Confirmation
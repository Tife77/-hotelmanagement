import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'
import Title from '../Title/Title'
import MoonLoader from "react-spinners/MoonLoader";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./RoomDetails.css"


const RoomDetails = () => {
  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)

    }, [])
  return(
    <>
    <Navbar />
    <Header />

    { 
      loading?
      <div className='loaderCenter'>
      <MoonLoader
      color="#31b675"
      loading={loading}
      size={80}
      />
      </div>
    :
    <>
    <Title />
    <div className='container rddetails'>
      <div className='heading top'>
        <h2>Standard Room</h2>
        <div className="line"></div>
      </div>
      <div className='rdcenterimg'>
         <img src="/images/gallery-1.jpg" alt="" />
      </div>
      <div className='rdflex'>
        <div className='rdflexl'>
          <div className="padding2">
          <hr className='greenlinee'/>
          <div className="padding3"><h3>Standard Room</h3></div>
          <hr className='greenlinee'/>
          <div className='padding4'>
            <h4>Room Description</h4>
            <p className='padding5'>The room is rectangular with white walls and a wooden floor, filled with natural light from a large window. A plush sofa, matching armchairs, and a sleek coffee table sit in the center of the room, while a modern fireplace and flat-screen TV hang on the wall. </p>
            <p className='padding6'><span>Room Size:</span> 25sqft</p>
            <p><span>Bathroom Size:</span> 25sqft</p>
            <h3 className='splitt'><b>Price:</b> #15,000</h3>
        </div>
        <div className=''>
          <Link to="/confirmationpage"><button className='padding7'>Book Now</button></Link>
          </div>
          </div>
        </div>
        <div className='rdflexr'>
          <h3 className='features22'>Room Features</h3>
          <hr className='greenlinee'/>
          <div className='alignitems'>
            <div className='ind'><svg width="25" height="25" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3327 46.2003C26.3327 49.5003 29.3163 52.8003 33 52.8003C36.6837 52.8003 39.6673 49.5003 39.6673 46.2003C39.6673 36.3005 26.3327 36.3005 26.3327 46.2003ZM18.8552 32.1987L23.5724 36.8683C28.7696 31.7204 37.2304 31.7204 42.4276 36.8683L47.1448 32.1987C39.3306 24.4669 26.6694 24.4669 18.8552 32.1987ZM0 13.5306L4.71381 18.2003C20.3121 2.75982 45.6879 2.75982 61.2862 18.2003L66 13.5306C47.7748 -4.51021 18.2252 -4.51021 0 13.5306ZM56.5724 22.8667L51.8586 27.5323C41.4609 17.2397 24.5391 17.2397 14.1414 27.5323L9.42762 22.8667C22.4456 9.98036 43.5544 9.98036 56.5724 22.8667Z" fill="#31b675"/>
              </svg>
              <p>Wi-Fi Availability</p></div>
            <div className='ind'><svg width="25" height="25" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7159 12.9303V9.07338C14.7159 7.41458 16.0613 6.06822 17.7209 6.06822H27.3366C28.9964 6.06822 30.3417 7.41458 30.3417 9.07338V12.9303C30.3417 13.4315 30.2074 13.8974 29.9901 14.3128H32.94C32.7227 13.8974 32.5883 13.4315 32.5883 12.9303V9.07338C32.5883 7.41458 33.9337 6.06822 35.5935 6.06822H45.2091C46.8688 6.06822 48.2142 7.41458 48.2142 9.07338V12.9303C48.2142 13.4315 48.08 13.8974 47.8626 14.3128H54.4026V3.87217C54.4026 1.73402 52.6696 0 50.5305 0H12.3995C10.2606 0 8.52734 1.73402 8.52734 3.87217V14.3129H15.0673C14.8502 13.8975 14.7159 13.4315 14.7159 12.9303Z" fill="#31b675"/>
              <path d="M54.4024 16.1023H8.52732L0.458984 36.9113H62.4708L54.4024 16.1023Z" fill="#31b675"/>
              <path d="M0 38.4089V45.0718C0 47.3632 1.85693 49.2203 4.14848 49.2203H58.7817C61.0731 49.2203 62.9302 47.3633 62.9302 45.0718V38.4089H0Z" fill="#31b675"/>
              <path d="M8.61009 56.9999H16.0505L16.727 51.1716H7.93359L8.61009 56.9999Z" fill="#31b675"/>
              <path d="M46.8807 56.9999H54.3201L54.9965 51.1716H46.2031L46.8807 56.9999Z" fill="#31b675"/>
              </svg>
              <p>Air Conditioning</p></div>
            <div className='ind'><svg width="25" height="25" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2885 49.3535H1.82326C0.729306 49.3535 0 50.0828 0 51.1768C0 52.2707 0.729306 53 1.82326 53H38.2885C39.3825 53 40.1118 52.2707 40.1118 51.1768C40.1118 50.0828 39.3825 49.3535 38.2885 49.3535Z" fill="#31b675"/>
                <path d="M41.936 18.3579C40.6597 18.3579 39.3835 18.7226 38.2895 19.4519V18.3579C38.2895 17.264 37.5602 16.5347 36.4662 16.5347H3.64748C2.55352 16.5347 1.82422 17.264 1.82422 18.3579V29.6622C1.82422 39.5078 10.0289 47.5302 20.0569 47.5302C27.7146 47.5302 34.2783 42.972 37.0132 36.4082C38.2895 37.6845 39.9304 38.4138 41.936 38.4138C45.9472 38.4138 49.2291 35.132 49.2291 31.1208V25.651C49.2291 21.6398 45.9472 18.3579 41.936 18.3579ZM45.5825 31.1208C45.5825 33.1264 43.9416 34.7673 41.936 34.7673C39.9304 34.7673 38.2895 33.1264 38.2895 31.1208V29.6622V25.651C38.2895 23.6454 39.9304 22.0045 41.936 22.0045C43.9416 22.0045 45.5825 23.6454 45.5825 25.651V31.1208Z" fill="#31b675"/>
                <path d="M20.0566 14.7115C20.4213 14.7115 20.7859 14.5291 21.1506 14.3468C22.0622 13.7998 22.2445 12.7059 21.6976 11.7942C19.8743 9.05934 19.8743 5.59514 21.6976 2.86025C22.2445 1.94861 22.0622 0.854655 21.1506 0.307676C20.239 -0.239303 19.145 -0.0569771 18.598 0.854655C16.0455 4.86584 16.0455 9.97097 18.598 13.7998C18.9627 14.3468 19.5097 14.7115 20.0566 14.7115Z" fill="#31b675"/>
                <path d="M12.7637 14.7114C13.1283 14.7114 13.493 14.529 13.8576 14.3467C14.7693 13.7997 14.9516 12.7058 14.4046 11.7941C12.5813 9.05924 12.5813 5.59504 14.4046 2.86014C14.9516 1.94851 14.7693 0.85455 13.8576 0.307571C12.946 -0.0570822 11.852 0.125244 11.3051 0.85455C8.75248 4.86573 8.75248 9.97087 11.3051 13.7997C11.6697 14.3467 12.2167 14.7114 12.7637 14.7114Z" fill="#31b675"/>
                <path d="M27.3496 14.7115C27.7143 14.7115 28.0789 14.5291 28.4436 14.3468C29.3552 13.7998 29.5375 12.7059 28.9905 11.7942C27.1673 9.05934 27.1673 5.59514 28.9905 2.86025C29.5375 1.94861 29.3552 0.854655 28.4436 0.307676C27.5319 -0.239303 26.438 -0.0569771 25.891 0.854655C23.3384 4.86584 23.3384 9.97097 25.891 13.7998C26.2556 14.3468 26.8026 14.7115 27.3496 14.7115Z" fill="#31b675"/>
                </svg>
                <p>Free Breakfast</p>
              </div>
            <div className='ind'><svg width="25" height="25" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7159 12.9303V9.07338C14.7159 7.41458 16.0613 6.06822 17.7209 6.06822H27.3366C28.9964 6.06822 30.3417 7.41458 30.3417 9.07338V12.9303C30.3417 13.4315 30.2074 13.8974 29.9901 14.3128H32.94C32.7227 13.8974 32.5883 13.4315 32.5883 12.9303V9.07338C32.5883 7.41458 33.9337 6.06822 35.5935 6.06822H45.2091C46.8688 6.06822 48.2142 7.41458 48.2142 9.07338V12.9303C48.2142 13.4315 48.08 13.8974 47.8626 14.3128H54.4026V3.87217C54.4026 1.73402 52.6696 0 50.5305 0H12.3995C10.2606 0 8.52734 1.73402 8.52734 3.87217V14.3129H15.0673C14.8502 13.8975 14.7159 13.4315 14.7159 12.9303Z" fill="#31b675"/>
                <path d="M54.4024 16.1023H8.52732L0.458984 36.9113H62.4708L54.4024 16.1023Z" fill="#31b675"/>
                <path d="M0 38.4089V45.0718C0 47.3632 1.85693 49.2203 4.14848 49.2203H58.7817C61.0731 49.2203 62.9302 47.3633 62.9302 45.0718V38.4089H0Z" fill="#31b675"/>
                <path d="M8.61009 56.9999H16.0505L16.727 51.1716H7.93359L8.61009 56.9999Z" fill="#31b675"/>
                <path d="M46.8807 56.9999H54.3201L54.9965 51.1716H46.2031L46.8807 56.9999Z" fill="#31b675"/>
                </svg><p>Single Queen Size Bed</p>
            </div>
            <div className='ind'><svg width="25" height="25" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1317 0C12.4739 0 0 4.95251 0 10.6392C0 15.5225 0 15.9733 0 16.0037C0 17.2964 1.04748 18.3439 2.34019 18.3439H11.2347C12.5274 18.3439 13.5747 17.2964 13.5747 16.0037V11.9673C13.5747 10.7893 14.4514 9.79459 15.6196 9.64586C15.6196 9.64586 18.8219 8.98811 25.1317 8.98811C31.4415 8.98811 34.6436 9.64586 34.6436 9.64586C35.812 9.79449 36.6885 10.7893 36.6885 11.9673V16.0038C36.6885 17.2965 37.736 18.344 39.0286 18.344H47.9231C49.2158 18.344 50.2633 17.2965 50.2633 16.0038C50.2633 15.9733 50.2633 15.5225 50.2633 10.6393C50.2634 4.95251 37.7896 0 25.1317 0Z" fill="#31b675"/>
              <path d="M34.2123 16.0037V12.0854L34.1449 12.0714C34.1206 12.0666 31.0476 11.4644 25.1316 11.4644C19.2157 11.4644 16.1427 12.0665 16.1121 12.0728L16.051 12.0853V16.0037C16.051 18.6599 13.8901 20.8201 11.2346 20.8201H5.04492V34.7596C5.04492 38.2062 7.83866 40.9999 11.2846 40.9999H38.9786C42.4246 40.9999 45.2183 38.2061 45.2183 34.7596V20.8201H39.0287C36.3731 20.8201 34.2123 18.6599 34.2123 16.0037ZM32.5 31.5053V34.8353H29.1708V31.5053H32.5ZM32.5 26.2394V29.5695H29.1708V26.2394H32.5ZM32.5 20.9743V24.3036H29.1708V20.9743H32.5ZM26.7966 31.5053V34.8353H23.4673V31.5053H26.7966ZM26.7966 26.2394V29.5695H23.4673V26.2394H26.7966ZM23.4673 24.3036V20.9743H26.7966V24.3036H23.4673ZM21.0932 31.5053V34.8353H17.7639V31.5053H21.0932ZM21.0932 26.2394V29.5695H17.7639V26.2394H21.0932ZM21.0932 20.9743V24.3036H17.7639V20.9743H21.0932Z" fill="#31b675"/>
              </svg><p>Telephone</p>
            </div>
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

export default RoomDetails
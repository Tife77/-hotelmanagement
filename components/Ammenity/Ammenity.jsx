import React, { useState } from 'react'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'
import './Ammenity.css'

const Ammenity = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [isVisibles, setIsVisibles] = useState(true);
    const [isVisibless, setIsVisibless] = useState(true);
    // const [buttonColor, setButtonColor] = useState("green");

    const handleToggle = () => {
      setIsVisible(!isVisible);
    }

    const handleToggles = () => {
      setIsVisibles(!isVisibles);
    }

    const handleToggless = () => {
      setIsVisibless(!isVisibless);
    }

    // const handleButtonClick = () => {
    //     setButtonColor("white");
    // }

    // const handleTwoFunctions = () => {
    //     handleToggle();
    //     handleButtonClick();
    // }

  return (
    <> 
        <Title />
        <div className='ammenity1 container top'>
            <div className='heading'>
                <h2>Our <span>Main </span>Attractions</h2>
                <div className="line"></div>
            </div>
            <p></p>
            <div className='ovrammenity'>
                <div className="ammenitycol">
                    <div className='imagecon'>
                        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7607 27.9292C16.4144 29.2754 16.4144 31.4804 17.7607 32.8267L30.7035 45.7673C32.0499 47.1137 34.2525 47.1137 35.5989 45.7673L49.6492 59.8176C50.3225 60.4909 51.4239 60.4909 52.097 59.8176C52.7701 59.1445 52.7701 58.0431 52.097 57.37L35.5989 40.8719L35.1914 40.4622L22.6584 27.9292C21.312 26.5828 19.1071 26.5828 17.7607 27.9292Z" stroke="#000000" stroke-width="2.12727" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.4345 16.4453L38.8472 22.8579C40.3809 24.4288 40.564 26.86 39.3928 28.6264C39.5224 28.7024 39.65 28.7911 39.7612 28.9022L60.1605 49.3014C60.8357 49.9766 60.8357 51.078 60.1646 51.7491C59.4893 52.4265 58.3879 52.4265 57.7127 51.7491L37.3136 31.35C37.2065 31.2429 37.1262 31.1275 37.0521 31.0061C35.2652 32.2702 32.766 32.1302 31.1519 30.5532L24.7393 24.1405" stroke="#000000" stroke-width="2.12727" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.4985 21.5366L33.8309 27.869" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.9468 19.0879L36.2791 25.4203" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.5798 40.2294C70.5798 57.2832 56.7539 71.1091 39.7001 71.1091C22.6461 71.1091 8.82031 57.2832 8.82031 40.2294C8.82031 23.1754 22.6461 9.34961 39.7001 9.34961C56.7539 9.34961 70.5798 23.1754 70.5798 40.2294Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                   <div className='indicator2'>
                        <p>On Site Restaurant</p>
                   </div>
                </div>
                <div className="ammenitycol">
                    <div className='imagecon'>
                    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.5938 41.0351C52.848 32.8827 50.4871 28.5857 51.321 26.4987C52.4048 23.7953 56.1155 14.5228 57.1731 11.8798L50.5293 9.2207C49.4697 11.8637 45.7611 21.1362 44.6773 23.8418C43.7264 26.2208 37.7757 27.8143 33.5433 38.3902C33.2008 39.2443 32.8323 40.1689 32.4414 41.1439" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46.8955 18.8057L53.3057 21.3882" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.6025 32.4707L51.1772 38.1053" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3809 42.8662L25.1793 71.4272H52.8379L57.5135 42.8662H20.3809Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.9053 41.5371H59.9895" stroke="#000000" stroke-width="2.65909" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
 
                   <div className='indicator2'>
                        <p>Room Service</p>
                   </div>
                </div>
                <div className="ammenitycol">
                <div className='imagecon'>
                <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9259 42.7402C52.3104 42.7402 50.1924 44.9232 50.1924 47.6186C50.1924 50.3114 52.3104 52.4943 54.9259 52.4943C57.5389 52.4943 59.657 50.3114 59.657 47.6186C59.657 44.9232 57.5389 42.7402 54.9259 42.7402Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7682 42.7402C21.1527 42.7402 19.0371 44.9232 19.0371 47.6186C19.0371 50.3114 21.1527 52.4943 23.7682 52.4943C26.381 52.4943 28.5015 50.3114 28.5015 47.6186C28.5015 44.9232 26.381 42.7402 23.7682 42.7402Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M69.3192 29.7353H64.3754L57.1625 16.3678C56.2694 14.7128 54.3442 13.4785 52.788 13.4785H25.9088C24.3524 13.4785 22.4274 14.7128 21.5341 16.3678L14.3213 29.7353H9.37748C8.5065 29.7353 7.79883 30.4619 7.79883 31.3621V34.6135C7.79883 35.5112 8.5065 36.238 9.37748 36.238H11.1813C10.9561 37.0948 10.9561 37.6276 10.9561 37.8648V55.746V57.373V63.8755C10.9561 64.7732 11.6613 65.5001 12.5323 65.5001H18.842C19.713 65.5001 20.4206 64.7732 20.4206 63.8755V58.9973H58.2786V63.8755C58.2786 64.7732 58.9838 65.5001 59.8548 65.5001H66.1644C67.0354 65.5001 67.743 64.7732 67.743 63.8755V57.373V55.746V37.8648C67.743 37.6276 67.7431 37.0972 67.5154 36.238H69.3192C70.1901 36.238 70.8953 35.5112 70.8953 34.6135V31.3621C70.8953 30.4619 70.1901 29.7353 69.3192 29.7353Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.8554 34.6118H18.8426C17.593 34.6118 26.2854 21.0224 26.2854 21.0224C26.6022 20.436 27.4682 19.9795 28.2352 19.9795H50.4601C51.2296 19.9795 52.0956 20.436 52.4124 21.0224C52.4124 21.0224 61.105 34.6118 59.8554 34.6118Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                </svg>
                </div>
                   <div className='indicator2'>
                        <p>Free Parking</p>
                   </div>
                </div>
                <div className="ammenitycol">
                <div className='imagecon'>
                <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9081 35.7275C63.9081 39.0054 61.2547 41.654 57.983 41.654C54.7098 41.654 52.0596 39.0054 52.0596 35.7275C52.0596 32.4573 54.7098 29.8057 57.983 29.8057C61.2547 29.8057 63.9081 32.4573 63.9081 35.7275Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M70.4906 54.6655C70.4906 54.6655 63.2022 48.3046 53.8883 48.3046C44.5712 48.3046 36.5301 52.9475 26.2512 52.9475C13.9497 52.9475 7.29688 47.2959 7.29688 47.2959" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M16.1328 51.2453L38.579 37.8694L36.1224 32.4253C36.1224 32.4253 35.5883 30.1999 33.7471 30.8152C31.9058 31.4275 23.009 35.9954 21.516 36.567C17.732 38.0224 15.9892 34.0777 19.6497 31.9428C24.391 29.1754 33.2974 24.7778 34.6498 24.0531C36.3598 23.1332 37.9715 22.9662 39.4207 25.4445C41.5243 29.0506 48.0709 38.9438 49.4655 41.3941C50.8586 43.8444 51.6144 45.9137 48.9486 48.4763" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                </svg>
                </div>

                   <div className='indicator2'>
                        <p>Swimming Pool</p>
                   </div>
                </div>
                <div className="ammenitycol">
                <div className='imagecon'>
                <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5527 48.1561H51.1105V36.8633H27.5527V48.1561Z" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M51.9941 61.3371V19.9316" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M52.5059 19.9248H60.0345C62.1124 19.9248 63.7987 21.6094 63.7987 23.6892V57.566C63.7987 59.6458 62.1124 61.3304 60.0345 61.3304H52.5059" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M63.7988 46.2744H69.4444C70.4843 46.2744 71.3274 45.4313 71.3274 44.393V36.8644C71.3274 35.8246 70.4843 34.9814 69.4444 34.9814H63.7988" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M27.1758 61.3371V19.9316" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M26.1572 19.9248H18.6286C16.5504 19.9248 14.8643 21.6094 14.8643 23.6892V57.566C14.8643 59.6458 16.5504 61.3304 18.6286 61.3304H26.1572" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                <path d="M14.8645 46.2744H9.21889C8.17903 46.2744 7.33594 45.4313 7.33594 44.393V36.8644C7.33594 35.8246 8.17903 34.9814 9.21889 34.9814H14.8645" stroke="#000000" stroke-width="2.65909" stroke-linecap="round"/>
                </svg>
                </div>
 
                   <div className='indicator2'>
                        <p>Gym membership</p>
                   </div>
                </div>
            </div>
            </div>

            <div className='allammenity container'>
            <div className='allammenityHead'>
                <div className='headerButton'>
                <h3>All Ammenities</h3>
                <button className="toggle-button" onClick={handleToggle}>
                <i className={isVisible ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                </button>
                </div>
                <div className="line"></div>
            </div>
            {isVisible &&
                <div className='listammenity'>
                <ul>
                    <li>Free Parking</li>
                    <li>Non-Smoking rooms</li>
                    <li>Concierge</li>
                    <li>On-Site Restaurant</li>
                    <li>Swimming Pool</li>
                </ul>
                <ul>
                    <li>Room Service</li>
                    <li>24/7 service time</li>
                    <li>Bank Proximity</li>
                    <li>Fitness Center</li>
                </ul>
                <ul>
                    <li>Meeting Rooms</li>
                    <li>Constant Electricity</li>
                </ul>
                </div>
                }
            </div>

        <div className='container ourrules'>
            <div className='ourrules2'>
                <h2>Our <span>Rules</span></h2>
            </div>

        </div>
        <div className='allammenity container'>
            <div className='allammenityHead'>
                <div className='headerButton'>
                <h3>Reservation Cancellation</h3>
                <button className="toggle-button" onClick={handleToggles}>
                <i className={isVisibles ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                </button>
                </div>
                <div className="line"></div>
            </div>
            {isVisibles &&
                <p className="paragraph2">Please be advised that the <span>cancellation policy</span> for your reservation may be subject to variation based on the specific dates and rate of your booking. We kindly request that you refer to your reservation confirmation to confirm the applicable cancellation policy.
                Should you require further assistance or clarification, we encourage you to contact our hotel directly or our dedicated <span> customer service team.</span></p>
                }
            </div>
        <div className='allammenitys container '>
            <div className='allammenityHead'>
                <div className='headerButton'>
                <h3>Payment Policy</h3>
                <button className="toggle-button" onClick={handleToggless}>
                <i className={isVisibless ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                </button>
                </div>
                <div className="line"></div>
            </div>
            {isVisibless &&
                <div className='listammenitys'>
                <ul className='boldList'>
                    <li>Accepted Currency:</li>
                    <li>Mode of Payment:</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>Transfer Policy:</li>
                </ul>
                <ul>
                    <li>Nigerian Naira (#)</li>
                    <li className='masterCard'>
                        <p>MasterCard</p> 
                        <svg width="30" height="25" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.09747 30.1958V28.1872C7.09747 27.4173 6.6288 26.9151 5.82537 26.9151C5.42365 26.9151 4.98846 27.049 4.68717 27.4842C4.45284 27.116 4.11807 26.9151 3.61593 26.9151C3.28116 26.9151 2.9464 27.0155 2.67859 27.3838V26.9821H1.97559V30.1958H2.67859V28.4215C2.67859 27.8524 2.97988 27.5846 3.44854 27.5846C3.91721 27.5846 4.15155 27.8859 4.15155 28.4215V30.1958H4.85455V28.4215C4.85455 27.8524 5.18931 27.5846 5.62451 27.5846C6.09318 27.5846 6.32751 27.8859 6.32751 28.4215V30.1958H7.09747ZM17.5086 26.9821H16.3704V26.0112H15.6674V26.9821H15.0314V27.6181H15.6674V29.0911C15.6674 29.8276 15.9687 30.2627 16.7721 30.2627C17.0734 30.2627 17.4082 30.1623 17.6425 30.0284L17.4417 29.4258C17.2408 29.5597 17.0065 29.5932 16.8391 29.5932C16.5043 29.5932 16.3704 29.3924 16.3704 29.0576V27.6181H17.5086V26.9821ZM23.4674 26.9151C23.0657 26.9151 22.7979 27.116 22.6305 27.3838V26.9821H21.9275V30.1958H22.6305V28.3881C22.6305 27.8524 22.8648 27.5512 23.3 27.5512C23.4339 27.5512 23.6013 27.5846 23.7352 27.6181L23.9361 26.9486C23.8022 26.9151 23.6013 26.9151 23.4674 26.9151ZM14.4623 27.2499C14.1275 27.0155 13.6588 26.9151 13.1567 26.9151C12.3533 26.9151 11.8176 27.3168 11.8176 27.9529C11.8176 28.4885 12.2193 28.7898 12.9223 28.8902L13.2571 28.9237C13.6254 28.9906 13.8262 29.0911 13.8262 29.2585C13.8262 29.4928 13.5584 29.6602 13.0897 29.6602C12.6211 29.6602 12.2528 29.4928 12.0185 29.3254L11.6837 29.861C12.052 30.1288 12.5541 30.2627 13.0563 30.2627C13.9936 30.2627 14.5292 29.8276 14.5292 29.225C14.5292 28.6559 14.094 28.3546 13.4245 28.2542L13.0897 28.2207C12.7884 28.1872 12.5541 28.1203 12.5541 27.9194C12.5541 27.6851 12.7884 27.5512 13.1567 27.5512C13.5584 27.5512 13.9601 27.7185 14.161 27.819L14.4623 27.2499ZM33.1421 26.9151C32.7403 26.9151 32.4725 27.116 32.3052 27.3838V26.9821H31.6021V30.1958H32.3052V28.3881C32.3052 27.8524 32.5395 27.5512 32.9747 27.5512C33.1086 27.5512 33.276 27.5846 33.4099 27.6181L33.6107 26.9486C33.4768 26.9151 33.276 26.9151 33.1421 26.9151ZM24.1704 28.5889C24.1704 29.5597 24.8399 30.2627 25.8777 30.2627C26.3464 30.2627 26.6811 30.1623 27.0159 29.8945L26.6811 29.3254C26.4133 29.5263 26.1455 29.6267 25.8442 29.6267C25.2751 29.6267 24.8734 29.225 24.8734 28.5889C24.8734 27.9864 25.2751 27.5846 25.8442 27.5512C26.1455 27.5512 26.4133 27.6516 26.6811 27.8524L27.0159 27.2833C26.6811 27.0155 26.3464 26.9151 25.8777 26.9151C24.8399 26.9151 24.1704 27.6181 24.1704 28.5889ZM30.6648 28.5889V26.9821H29.9618V27.3838C29.7275 27.0825 29.3927 26.9151 28.9575 26.9151C28.0537 26.9151 27.3507 27.6181 27.3507 28.5889C27.3507 29.5597 28.0537 30.2627 28.9575 30.2627C29.4262 30.2627 29.7609 30.0954 29.9618 29.7941V30.1958H30.6648V28.5889ZM28.0871 28.5889C28.0871 28.0198 28.4554 27.5512 29.0579 27.5512C29.627 27.5512 30.0288 27.9864 30.0288 28.5889C30.0288 29.158 29.627 29.6267 29.0579 29.6267C28.4554 29.5932 28.0871 29.158 28.0871 28.5889ZM19.6846 26.9151C18.7472 26.9151 18.0777 27.5846 18.0777 28.5889C18.0777 29.5932 18.7472 30.2627 19.718 30.2627C20.1867 30.2627 20.6554 30.1288 21.0236 29.8276L20.6889 29.3254C20.4211 29.5263 20.0863 29.6602 19.7515 29.6602C19.3163 29.6602 18.8811 29.4593 18.7807 28.8902H21.1575V28.6224C21.191 27.5846 20.5884 26.9151 19.6846 26.9151ZM19.6846 27.5177C20.1198 27.5177 20.421 27.7855 20.488 28.2876H18.8142C18.8811 27.8524 19.1824 27.5177 19.6846 27.5177ZM37.1257 28.5889V25.71H36.4227V27.3838C36.1884 27.0825 35.8536 26.9151 35.4185 26.9151C34.5146 26.9151 33.8116 27.6181 33.8116 28.5889C33.8116 29.5597 34.5146 30.2627 35.4185 30.2627C35.8871 30.2627 36.2219 30.0954 36.4227 29.7941V30.1958H37.1257V28.5889ZM34.5481 28.5889C34.5481 28.0198 34.9163 27.5512 35.5189 27.5512C36.088 27.5512 36.4897 27.9864 36.4897 28.5889C36.4897 29.158 36.088 29.6267 35.5189 29.6267C34.9163 29.5932 34.5481 29.158 34.5481 28.5889ZM11.0477 28.5889V26.9821H10.3447V27.3838C10.1103 27.0825 9.77557 26.9151 9.34038 26.9151C8.43652 26.9151 7.73352 27.6181 7.73352 28.5889C7.73352 29.5597 8.43652 30.2627 9.34038 30.2627C9.80905 30.2627 10.1438 30.0954 10.3447 29.7941V30.1958H11.0477V28.5889ZM8.43652 28.5889C8.43652 28.0198 8.80476 27.5512 9.40733 27.5512C9.97643 27.5512 10.3781 27.9864 10.3781 28.5889C10.3781 29.158 9.97643 29.6267 9.40733 29.6267C8.80476 29.5932 8.43652 29.158 8.43652 28.5889Z" fill="black"/>
                        <path d="M24.7726 2.57812H14.2275V21.5257H24.7726V2.57812Z" fill="#FF5F00"/>
                        <path d="M14.897 12.0515C14.897 8.2017 16.7047 4.78712 19.4832 2.57768C17.4412 0.970814 14.8635 0 12.0515 0C5.38969 0 0 5.38969 0 12.0515C0 18.7133 5.38969 24.103 12.0515 24.103C14.8635 24.103 17.4412 23.1322 19.4832 21.5253C16.7047 19.3493 14.897 15.9013 14.897 12.0515Z" fill="#EB001B"/>
                        <path d="M38.9998 12.0515C38.9998 18.7133 33.6101 24.103 26.9484 24.103C24.1363 24.103 21.5587 23.1322 19.5166 21.5253C22.3286 19.3158 24.1029 15.9013 24.1029 12.0515C24.1029 8.2017 22.2951 4.78712 19.5166 2.57768C21.5587 0.970814 24.1363 0 26.9484 0C33.6101 0 38.9998 5.42317 38.9998 12.0515Z" fill="#F79E1B"/>
                        </svg>
                  </li>
                    <li>Visa Card <i class="fab fa-cc-visa"></i></li>
                    <li>No Transfer Accepted</li>
                </ul>
                </div>
                }
            </div>
        <Footer />
    </>
  )
}

export default Ammenity
import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="waves">
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </div>
        <div className="wholesec container">
        <div className='firstsec'>
            <div className='logofooter'>
                <h2><span>HOTEL</span></h2>
            </div>
            <div className='footerparagraph'>
                <p>Become a leading hotel in the region known for exceptional service and luxurious accommodations, while fostering growth and development for team members.
                    Values: Personalized service, modern amenities, and commitment to excellence.</p>
            </div>
            <div className='footerIcons'>
                <Link path to="facebook.com">
                <svg width="25" height="25" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5 73C56.6584 73 73 56.6584 73 36.5C73 16.3416 56.6584 0 36.5 0C16.3416 0 0 16.3416 0 36.5C0 56.6584 16.3416 73 36.5 73Z" fill="url(#paint0_linear_60_23)"/>
                <path d="M49.9687 47.8205L51.5753 37.5825H41.5251V30.9418C41.5251 28.1402 42.9266 25.4078 47.428 25.4078H52V16.6917C52 16.6917 47.8525 16 43.8891 16C35.6082 16 30.2011 20.9044 30.2011 29.7795V37.5825H21V47.8205H30.2011V72.5712C32.0481 72.8549 33.9378 73 35.8629 73C37.788 73 39.678 72.8549 41.5251 72.5712V47.8205H49.9687Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_60_23" x1="36.5" y1="0" x2="36.5" y2="72.7836" gradientUnits="userSpaceOnUse">
                <stop stop-color="#18ACFE"/>
                <stop offset="1" stop-color="#0163E0"/>
                </linearGradient>
                </defs>
                </svg>
                </Link>

                <Link path to="twitter.com">
                <svg width="25" height="25" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5 51C39.5833 51 51 39.5833 51 25.5C51 11.4167 39.5833 0 25.5 0C11.4167 0 0 11.4167 0 25.5C0 39.5833 11.4167 51 25.5 51Z" fill="#1DA1F2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8002 15.6935C39.6753 16.1933 38.4645 16.5299 37.1948 16.6818C38.491 15.9046 39.4866 14.6746 39.9546 13.209C38.743 13.929 37.3977 14.4502 35.9688 14.7328C34.8234 13.513 33.1905 12.75 31.3862 12.75C27.9195 12.75 25.1085 15.561 25.1085 19.0277C25.1085 19.5192 25.1646 19.9986 25.2717 20.4586C20.0538 20.1975 15.4283 17.6976 12.3319 13.8994C11.7913 14.8266 11.4822 15.9046 11.4822 17.0552C11.4822 19.2327 12.5889 21.1543 14.2748 22.2802C13.2446 22.2476 12.2778 21.9651 11.4302 21.4948V21.5734C11.4302 24.6159 13.5955 27.1524 16.4657 27.7307C15.9394 27.8735 15.3845 27.9511 14.8124 27.9511C14.4074 27.9511 14.0137 27.9113 13.6302 27.8378C14.4289 30.3316 16.7482 32.1471 19.4948 32.1981C17.3468 33.881 14.64 34.8855 11.6984 34.8855C11.1905 34.8855 10.6908 34.856 10.2002 34.7968C12.9785 36.5777 16.278 37.618 19.8233 37.618C31.3699 37.618 37.6843 28.052 37.6843 19.7569C37.6843 19.4846 37.6793 19.2134 37.666 18.9451C38.8939 18.0577 39.9587 16.9521 40.8002 15.6935Z" fill="white"/>
                </svg>
                </Link>

                <Link path to="instagram.com">
                <svg width="25" height="25" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42857 0H34.5714C39.7787 0 44 4.22131 44 9.42857V34.5714C44 39.7787 39.7787 44 34.5714 44H9.42857C4.22132 44 0 39.7787 0 34.5714V9.42857C0 4.22131 4.22132 0 9.42857 0Z" fill="url(#paint0_radial_60_18)"/>
                <path d="M9.42857 0H34.5714C39.7787 0 44 4.22131 44 9.42857V34.5714C44 39.7787 39.7787 44 34.5714 44H9.42857C4.22132 44 0 39.7787 0 34.5714V9.42857C0 4.22131 4.22132 0 9.42857 0Z" fill="url(#paint1_radial_60_18)"/>
                <path d="M9.42857 0H34.5714C39.7787 0 44 4.22131 44 9.42857V34.5714C44 39.7787 39.7787 44 34.5714 44H9.42857C4.22132 44 0 39.7787 0 34.5714V9.42857C0 4.22131 4.22132 0 9.42857 0Z" fill="url(#paint2_radial_60_18)"/>
                <path d="M10.9996 13.3571C10.9996 14.6589 12.055 15.7143 13.3567 15.7143C14.6585 15.7143 15.7139 14.6589 15.7139 13.3571C15.7139 12.0553 14.6585 11 13.3567 11C12.055 11 10.9996 12.0553 10.9996 13.3571Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0003 29.8569C17.6609 29.8569 14.1431 26.3391 14.1431 21.9997C14.1431 17.6604 17.6609 14.1426 22.0003 14.1426C26.3396 14.1426 29.8574 17.6604 29.8574 21.9997C29.8574 26.3391 26.3396 29.8569 22.0003 29.8569ZM22.0003 26.714C19.3966 26.714 17.286 24.6034 17.286 21.9997C17.286 19.396 19.3966 17.2854 22.0003 17.2854C24.604 17.2854 26.7146 19.396 26.7146 21.9997C26.7146 24.6034 24.604 26.714 22.0003 26.714Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.7139 21.3718C37.7139 16.0914 37.7139 13.4511 36.6862 11.4342C35.7823 9.66012 34.3399 8.21773 32.5658 7.31378C30.5489 6.28613 27.9086 6.28613 22.6282 6.28613H21.371C16.0905 6.28613 13.4502 6.28613 11.4335 7.31378C9.65931 8.21773 8.2169 9.66012 7.31301 11.4342C6.2853 13.4511 6.2853 16.0914 6.2853 21.3718V22.629C6.2853 27.9095 6.2853 30.5498 7.31301 32.5665C8.2169 34.3407 9.65931 35.7831 11.4335 36.687C13.4502 37.7147 16.0905 37.7147 21.371 37.7147H22.6282C27.9086 37.7147 30.5489 37.7147 32.5658 36.687C34.3399 35.7831 35.7823 34.3407 36.6862 32.5665C37.7139 30.5498 37.7139 27.9095 37.7139 22.629V21.3718ZM22.6282 9.42899H21.371C18.6788 9.42899 16.8489 9.43144 15.4343 9.547C14.0563 9.65958 13.3517 9.86363 12.8602 10.1141C11.6775 10.7167 10.7159 11.6783 10.1133 12.861C9.86281 13.3525 9.65868 14.0572 9.54617 15.4351C9.43067 16.8497 9.42815 18.6797 9.42815 21.3718V22.629C9.42815 25.3212 9.43067 27.1511 9.54617 28.5657C9.65868 29.9437 9.86281 30.6483 10.1133 31.1398C10.7159 32.3225 11.6775 33.2841 12.8602 33.8867C13.3517 34.1372 14.0563 34.3413 15.4343 34.4538C16.8489 34.5693 18.6788 34.5718 21.371 34.5718H22.6282C25.3203 34.5718 27.1503 34.5693 28.5649 34.4538C29.9428 34.3413 30.6475 34.1372 31.139 33.8867C32.3217 33.2841 33.2833 32.3225 33.8859 31.1398C34.1364 30.6483 34.3404 29.9437 34.453 28.5657C34.5686 27.1511 34.571 25.3212 34.571 22.629V21.3718C34.571 18.6797 34.5686 16.8497 34.453 15.4351C34.3404 14.0572 34.1364 13.3525 33.8859 12.861C33.2833 11.6783 32.3217 10.7167 31.139 10.1141C30.6475 9.86363 29.9428 9.65958 28.5649 9.547C27.1503 9.43144 25.3203 9.42899 22.6282 9.42899Z" fill="white"/>
                <defs>
                <radialGradient id="paint0_radial_60_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.2857 33) rotate(-124.624) scale(40.1022)">
                <stop stop-color="#B13589"/>
                <stop offset="0.79309" stop-color="#C62F94"/>
                <stop offset="1" stop-color="#8A3AC8"/>
                </radialGradient>
                <radialGradient id="paint1_radial_60_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.8571 45.5714) rotate(-114.864) scale(35.5052)">
                <stop stop-color="#E0E8B7"/>
                <stop offset="0.444662" stop-color="#FB8A2E"/>
                <stop offset="0.71474" stop-color="#E2425C"/>
                <stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_60_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.3571 1.57143) rotate(-171.87) scale(61.1143 13.0717)">
                <stop offset="0.156701" stop-color="#406ADC"/>
                <stop offset="0.467799" stop-color="#6A45BE"/>
                <stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
                </radialGradient>
                </defs>
                </svg>
                </Link>

            </div>
        </div> 
        <div className='secondsec'>
            <div className='footerhead1'>
                <h3 >Discover Us</h3>
            </div>
            <div className='footerlist'>
                <ul>
                    <li>Our Company</li>
                    <li>Rules</li>
                    <li>Hotel Reservation</li>
                    <li>Call Us</li>
                    <li>24/7 Service</li>
                    <li>Customer Support</li>
                </ul>
            </div>
        </div> 
        <div className='thirdSec'>
            <div className='footerhead2'>
                <h3>Links</h3>
            </div>
            <div className='footerlistlink'>
                <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/rooms'>Rooms</Link></li>
                    <li><Link to= '/hotelinfo'>Hotel Info</Link></li>
                    <li><Link to= '/gallery'>Gallery</Link></li>
                    <li><Link to= '/location'>Location</Link></li>
                    <li><Link to= '/events'>Events</Link></li>
                </ul>
            </div>
        </div> 
        <div className='FourthSec'>
            <div className='footerhead3'>
                <h3>Send us a Message</h3>
            </div>
            <div>
                <div class="chat-box">
                <input type="text" placeholder="Enter your message" />
                <button type="submit" class="send-button">
                <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            </div>
            <div>
                <p className='footerparagraph'>Kindly Send us a suggestion and how we can render our services better.</p>
            </div>
        </div>
        </div> 
    </footer>
  )
}

export default Footer
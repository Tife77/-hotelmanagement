import React from 'react'
import "./About.css"

const AboutCard = () => {
  return (
    <>
    <div className="aboutCard mtop space">
        <div className="row row1">
            <h4>About Us</h4>
            <h1>
                We <span>provide convinience</span> to be able to relax 
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in semper sem, sit amet egestas ligula. Phasellus in enim ac mi malesuada fermentum. Mauris eget arcu eget ipsum aliquet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in semper sem, sit amet egestas ligula. Phasellus in enim ac mi malesuada fermentum. Mauris eget arcu eget ipsum aliquet iaculis.</p>
            <button className='secondary-btn'> Explore More... <i className='fas fa-long-arrow-alt-right'></i> </button>
        </div>
        <div className="row image">
            <img src="/images/about-img-1.jpg
            " alt="" />
            <div className="control-btn">
                <button className='prev'>
                    <i className='fas fa-play'></i>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCard
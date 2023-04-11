import React from 'react'
import Title from '../Title/Title'
import "./About.css"

import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
        <Title />
        <section className='about top'>
            <div className="container">
                <AboutCard />
            </div>
        </section>

        <section className='features top'>
            <div className="container aboutCard space">
                <div className="row row1">
                    <h1>
                        Our <span>Features</span>
                        
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in semper sem, sit amet egestas ligula. Phasellus in enim ac mi malesuada fermentum. Mauris eget arcu eget ipsum aliquet iaculis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in semper sem, sit amet egestas ligula. Phasellus in enim ac mi malesuada fermentum. Mauris eget arcu eget ipsum aliquet iaculis.</p>
                    <button className='secondary-btn'> Explore More... <i className='fas fa-long-arrow-alt-right'></i> </button>
                </div>
                <div className="row image round">
                    <img src="/images/heading.jpg" alt="" />
                    <div className="control-btn">
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                </div> 
            </div> 
        </div>  
        </section>
    </>
  )
}

export default About
import './aboutc.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import pic from '../assests/profile.jpeg'
import { BsFillEnvelopeFill, BsGeoAlt, BsTwitter } from "react-icons/bs";

const Aboutc = () => {
    return (
        <div className='about-main'>
            <div className='submain'>
                <div className='final-about'>
                <div className='add'>
                    <p className='add-icon-p'> <BsTwitter className='add-icon'/>Twitter</p>
                    <p className='add-icon-p2'>@it_l28</p>
                    <br/>
                  
                    <p className='add-icon-p'> < BsFillEnvelopeFill className='add-icon' />Email </p>
                    <p className='add-icon-p2'> kumaripriyanka76679707@gmail.com</p>
                    <br/>
                    <p className='add-icon-p'> <BsGeoAlt className='add-icon'/>Location</p>
                    <p className='add-icon-p2'>Jharkhand, India</p>
                </div>
                    <div className='pht-about'>
                    {/* <img src={pic} alt="img" className='pht-about' /> */}
                    </div>
                    
                </div>
                <div className='para'>
                    <h1>who am I? </h1>
                    <p> Hi! 👋 I'm Priyanka, a 19-year-old engineering sophomore pursuing BTech in Information Technology. I am a passionate self-learner,  exploring and
                        building projects👨‍💻 using various technologies.
                        I am a frontend web developer well versed in HTML,
                        CSS, JavaScript and stand at a beginner-intermediate level of React.</p>
                        <a href="https://drive.google.com/file/d/1a6fW-DUQqh43GM0dAw1yhwHviZIZswdN/view?usp=sharing" className="btn"> Resume</a>
                </div>
                
            </div>
        </div>

    )
}

export default Aboutc
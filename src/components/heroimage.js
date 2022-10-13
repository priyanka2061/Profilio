import './heroimage.css';
import pic from '../assests/hero.png';
import React from 'react'
import { Link } from 'react-router-dom'

function Heroimage() {
    return (
        <div className='main-heroimg'>
            <div className='hero-img'>
                <div className='intro-img-2'>
                    <img className='intro-img1' src={pic} alt='img' />

                </div>
            </div>
            <div className='contant-hero'>
                <p className='ptg'>HI, I'am priyanka  </p>
                <h1>Web Developer.</h1>
                <div className='botn'>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn-light btn'>Hire Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimage
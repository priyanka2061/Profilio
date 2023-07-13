import './contactme.css'
import React from 'react'
import Form from 'react'
import { BsFillEnvelopeFill, BsGeoAlt, BsTwitter } from "react-icons/bs";

const Contactme = () => {
    return (

        <div className='contactmain'>
         
                
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
                <div className='contactsubmain'>
                <h2>Message Me</h2>
                <form>

                    <input type="text" className='lp' placeholder='Name' />
                    <br />

                    <input type='text' className='lp' placeholder='Email' />
                    <br />
                    <input type='text' placeholder='subject' /><br />
                    <input type='text' placeholder="Message" className='cp' /><br />
                </form>
                <button className='btn' value='Submit'>Send Message</button>
            </div>

        </div >

    );
}

export default Contactme
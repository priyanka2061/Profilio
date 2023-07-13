import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiChevronUp } from "react-icons/fi";
import{MdExpandLess} from "react-icons/md"

const handleClick = () => {
  window.open("https://www.linkedin.com/in/priyanka-kumari-636b93226/");
};
const priyanka = () => {
  window.open("https://twitter.com/it_l28");
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-contant1'>
          <h2>Priyanka kumari</h2>
          <p>Frontend Developer</p>
        </div>
        <div className='footer-lst1'>
          <ul className='orls'>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>

        </div>
        <div className='footer-social1'>
           <h2>Follow Me</h2>
          <FaLinkedin className=" footer-s" onClick={handleClick} />
          <FaTwitter className=" footer-s" onClick={priyanka} />

        </div>
        </div>
        <a href='#' className='scroolicon'><MdExpandLess/> </a>
        <div className='para2'>
           {/* <FiChevronUp className='footer-icon' /> */}
          <p className="col-sm">
         
            &copy;{new Date().getFullYear()} Priyanka kumari All rights reserved
          </p>
        </div>
      
    </div>
  )
}

export default Footer
import React, { useState } from 'react'
import './navbarstyle.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {
  const [click, setclick] = useState(false);
  const handlClick = () => setclick(!click);


  return (
    <div className='navbar-main'>
      <Link to='/'> <h1 className="port">Portfolio</h1></Link>
 
      <ul className={click ? "nav_menu.activ" : "nav_menu"}>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/project'> Project</Link></li>
        <li><Link to='/about'> About </Link></li>
        <li><Link to='/skill'> Skills</Link></li>
        <li><Link to='/qualification'> Qualification</Link></li>
        <li><Link to='/contact'> Contact </Link></li>
      </ul>
      <div className='hamburger' onClick={handlClick}>
        {click ? (<FaTimes size={30} style={{ color: 'white' ,textAlign:'end' }} />) : (<FaBars size={20} style={{ color: 'white', textAlign:'end' }} />)}

      </div>
    </div>
  )
}

export default Navbar
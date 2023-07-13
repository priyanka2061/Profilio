import React, { useState } from 'react'
import './qualificationwork.css'
import { BiBriefcase } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";



const Qualificationwork = () => {

  return (
    <div className='qualification'>
      <div class='education' >

        <h3><FaUserGraduate className='q-w' />Education</h3>

        <br />

        <div className=''>
          <h5> <IoEllipse className='q-under' />BTech Information Technology </h5>
          <p>Asansol Engineering college</p>

          <p>2021 -2024</p>
        </div>
        <br />
        <div className='right1'>
          <h5><IoEllipse className='q-under' /> Diploma Computer Science Engineering </h5>
          <p>Goverment Women's Polytechnic college Gamshedpur</p>
          <p>2018 -2022</p>
        </div>
        <br />
        <div className=''>
          <h5><IoEllipse className='q-under' /> Secondary School </h5>
          <p>Utkarmit High School Barahmoriya Giridih</p>
          <p>2015-2018</p>
        </div>

      </div>
      <div className='work'>
        <div className='internship'>
          <h3><BiBriefcase className='q-w' />  Work Experience</h3>
          <br />
          <h5> <IoEllipse className='q-under' /> Web Development </h5>
          <p>Medlife Foundation</p>
          <p>20 June 2022 - 20 July 2022</p>
        </div>
        <br />
        <div className='' >
          <h5><IoEllipse className='q-under' /> Hackathon </h5>
          <p>Organized by GirlScript  Jaipur </p>
          <p>5 March 2022 - 10 March 2022</p>
        </div>
        <br />
      </div>
    </div >

  )
}

export default Qualificationwork;
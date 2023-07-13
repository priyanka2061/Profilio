import './skill.css';
import React from 'react'
import { FaJava, FaReact } from 'react-icons/fa'
import { DiJavascript1, DiCss3, DiJsBadge } from "react-icons/di";
import { BsCodeSlash } from "react-icons/bs";
import { SiC, SiCplusplus, SiNodedotjs, SiSencha } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import {useState}from 'react'
import { GrCode } from "react-icons/gr";
import {HiHashtag } from "react-icons/hi";


function Skillwork() {

  return (
    <div className='mn'>
      <br />
      <br />
      <div className='cnt'>

        <h1>Skills</h1>
        <p>My Technical skills</p>
        <br />
      </div>
      <div className='sb'>
        <div className='left'>

          <h3> Language </h3>
          <div className='left1'>
            <span> Languages that I have picked up over the years</span>

            <br />
            <FaJava className='ion' /><p> Java</p>

            <p className='c'>C++</p>

            <p className='c'>C</p>

            <BsCodeSlash className='ion' /><p>HTML</p>

            <DiCss3 className='ion' /><p> CSS</p>

            < SiNodedotjs className='ion' /><p> JavaScript</p>
          </div>
        </div>
        <div className='right'>
          <h3>Framwork</h3>
          <div className='right1'>
            <span>Libraries and Frameworks that I prefer to work with</span>
            <br />
            <div className='right1'>
              <FaReact className='ion' /><p> ReactJs</p>
              < SiSencha className='ion' /> <SiSencha className='ion' /><p>Tailwindcss</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skillwork
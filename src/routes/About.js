import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Aboutc from '../components/aboutc'

const About = () => {
  return (
    <div>
<Navbar/>

<Heroimg2 heading=" about me" para="I am Fontend Developer "/>
  <Aboutc/>

<Footer/> 
    </div>
  )
}

export default About
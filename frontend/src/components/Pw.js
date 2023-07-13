import React from 'react'
import './Pw.css'


  function Pw (props) {
  return (
    <div className='projectwork_main'>
        <div className='projectwork_submain'>
            <div className='projectwork_img'>
                <img src={props.i} alt='img' className='projectwork_img'/>

            </div>
            <br/>
            <div className='projectwork-content'>
                <h3>Title: {props.t}</h3>
                <br/>
                <p>{props.para}</p>
                <br/>
                <a href='#'>View</a>
            </div>
        </div>
    </div>
  )
}

export default Pw;
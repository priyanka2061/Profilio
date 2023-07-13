import './heroimgsty2.css'
import React, { Component } from 'react'
class Heroimg2 extends Component {
  render() {
    return (
      <div className='img2'>
        <div className='hero2-subcontent'>
          <div className='hero2-content3'>
            <h2> {this.props.heading}</h2>
            <p>{this.props.para}</p>

          </div>
        </div>
      </div>
    )
  }
}

export default Heroimg2
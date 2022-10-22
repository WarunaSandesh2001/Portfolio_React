import './AboutContentStyles.css'

import { Link } from 'react-router-dom'

import Language1 from "../../assets/carrental.jpg"
import Language2 from "../../assets/background2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about-container'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I'm a FullStack developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact">
          <button to="" className="btn" style={{ width: "30%", padding: "7px 32px", fontSize: "0.8rem"}}>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={Language1} className="img" alt='true' />
          </div>
          <div className='img-stack bottom'>
            <img src={Language2} className="img" alt='true' />
          </div>
          <div className='img-stack right'>
            <img src={Language1} className="img" alt='true' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
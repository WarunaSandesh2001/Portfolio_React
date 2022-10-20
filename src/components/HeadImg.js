import "./HeadImgStyles.css"

import React from 'react'
import IntroImg from '../assets/background.jpg'
import { Link } from "react-router-dom"

const HeadImg = () => {
  return (
    <div className="head">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M FULLSTACK DEVELOPER.</p>
        <h1>Waruna Sandesh</h1>
        <div className="CVContactBtnDiv">
          <Link to="/project" className="btn">Download CV</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeadImg
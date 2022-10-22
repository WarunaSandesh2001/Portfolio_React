import "./HeadImgStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const HeadImg = () => {
  return (
    <div className="head">
      <div className="mask">
        <img className="into-img" src={URL="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M FULLSTACK DEVELOPER.</p>
        <h1>Waruna Sandesh</h1>
        <div className="CVContactBtnDiv">
          <a href="myCV.pdf" download="myCV.pdf" className="btn">Download CV</a>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeadImg
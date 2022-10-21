import "./WorkCardStyles.css"

// import CarRentImg from '../assets/carrental.jpg'

import React from 'react'
// import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <button to={props.view} className="btnView">View More</button>
    </div>
  )
}

export default WorkCard
import "./HeadImg2Styles.css"

import React from 'react'

const HeadImg2 = (props) => {
  return (
    <div className="head-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeadImg2
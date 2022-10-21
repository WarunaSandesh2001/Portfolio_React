import React from 'react'

import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeadImg2 from '../components/HeadImg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeadImg2 heading="PROJECTS" text="Some of my recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
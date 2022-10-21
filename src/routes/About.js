import React from 'react'

import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeadImg2 from '../components/HeadImg2'

function About() {
  return (
    <div>
      <Navbar />
      <HeadImg2 heading="ABOUT" text="I'm a talented fullstack developer" />
      <Footer />
    </div>
  )
}

export default About
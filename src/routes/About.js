import React from 'react'

import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeadImg2 from '../components/HeadImg2'
import AboutContent from '../components/AboutMe/AboutContent'

function About() {
  return (
    <div>
      <Navbar />
      <HeadImg2 heading="ABOUT" text="I'm a talented fullstack developer" />
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About
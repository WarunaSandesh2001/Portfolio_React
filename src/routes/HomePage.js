import React from 'react'
import { Navbar } from '../components/Navbar'
import HeadImg from '../components/HeadImg'
import Footer from '../components/Footer'
import AboutMe from '../components/HomeAbout/HomeAboutMe'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeadImg/>
        <AboutMe/>
        <Footer/>
    </div>
  )
}

export default HomePage
import React from 'react'

import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import HeadImg2 from '../components/HeadImg2'
import Form from '../components/ContactForm/Form'

function Contact() {
  return (
    <div>
      <Navbar />
      <HeadImg2 heading="CONTACT" text="Let's talk. I'm waiting.!" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
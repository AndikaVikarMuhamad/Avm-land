import React from 'react'

import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <HeroImage heading='CONTACT.' text='Hubungi saya' />
    <ContactForm />
    <Footer/>
</div>
  )
}

export default Contact
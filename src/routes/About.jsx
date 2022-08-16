import React from 'react'
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import AboutSection from '../components/About'

export const About = () => {
  return (
    <div>
         <Navbar />
         <HeroImage heading='About' text='Segala tentang ini'/>
         <AboutSection />
         <Footer/>
    </div>
  )
}

export default About;
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projectlist from '../components/Project'
import HeroImage from '../components/HeroImage'

export const Project = () => {
  return (
    <div>
         <Navbar />
          <HeroImage heading='Project' text='Project yang telah saya buat' />
          <Projectlist />
         <Footer />
    </div>
  )
}


export default Project;
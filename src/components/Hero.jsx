import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyle.css'

import vid from '../assets/Hero.mp4'

export const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={vid} type='video/mp4'/>
        </video>
        <div className="content">
            <h1>Andika vikar</h1>
            <p>Rest api dengan gtw</p>
            <div>
            <Link to='https://avm.andikavikar135.repl.co/' className='btn'>Docs</Link>
            <Link to='https://github.com/AndikaVikarMuhamad/Avm' className='btn'>Source code</Link>
           </div>
       </div>
    </div>
  )
}

export default Hero;
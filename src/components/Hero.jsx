import React from 'react'
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
              <a href="https://avm.andikavikar135.repl.co/" className='btn'>Docs</a>
              <a href="https://github.com/AndikaVikarMuhamad/Avm" className='btn' >Source code</a>
           </div>
       </div>
    </div>
  )
}

export default Hero;
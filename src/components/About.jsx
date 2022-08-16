import React from 'react'
import {Link} from 'react-router-dom'
import './AboutStyle.css'
import Yui from '../assets/yui2.jpg'
import Shirori from '../assets/Shirori.jpg'


const About = () => {
  return (
    <div className='about'>
    <div className='left'>
        <h1>Rest Api</h1>
        <p>Avm-API adalah Free Rest-API untuk kalian yang mencari rest-api gratis! Saya harap Anda menikmati dan terima kasih telah menggunakan situs web ini. Situs web ini masih dalam pengembangan, Jika Anda menemukan bug silakan hubungi saya</p>
        <Link to='/contact'><button className='btn-light'>Contact</button></Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={Yui} className='img' alt='' />
            </div>
            <div className='image-stack bottom'>
                <img src={Shirori} className='img' alt='' />
            </div>
        </div>
    </div>
</div>
  )
}

export default About
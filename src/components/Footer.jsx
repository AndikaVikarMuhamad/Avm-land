import React from 'react'
import './FooterStyle.css'
import { FaYoutube,FaInstagram , FaPhone, FaSearchLocation ,FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>Karet pedurenan</p>
                            <h4>Jakarta, Indonesia</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 62-838-4160-3535</h4>
                    </div>
                    <div className='email'>
                        <h4><FaGithub size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />AndikaVikarMuhamad</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About this Rest-api</h4>
                    <p>Avm-API adalah Free Rest-API untuk kalian yang mencari rest-api gratis!</p>
                    <div className='social'>
                    <Link to="" ><FaYoutube size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></Link>
                    <Link to="" ><FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></Link>
                    <Link to="" ><FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
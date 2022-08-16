import React from 'react'
import {Link} from 'react-router-dom'
import './ProjectStyle.css'

export const Project = () => {
  return (
    <div className='project'>
    <div className='card-container'>
        <div className='card'>
            <h3>- Rest api -</h3>
            <span className='bar'></span>
            <p className='btc'>Feature</p>
            <p>- Download yt -</p>
            <p>- Short url maker -</p>
            <p>- Text maker -</p>
            <p>- Image manipulation -</p>
            <Link to='/contact' className='btn-light'>Book</Link>
        </div>
        <div className='card'>
            <h3>- Weather app -</h3>
            <span className='bar'></span>
            <p className='btc'>Feature</p>
            <p>- Search location -</p>
            <p>- Get Data Weather -</p>
            <p>-  -</p>
            <p>-  -</p>
            <Link to='/contact' className='btn-light'>Book</Link>
        </div>
        <div className='card'>
            <h3>- Bot whatsapp -</h3>
            <span className='bar'></span>
            <p className='btc'>Feature</p>
            <p>- Under development -</p>
            <p>-  -</p>
            <p>-  -</p>
            <p>- -</p>
            <Link to='/contact' className='btn-light'>Book</Link>
        </div>
    </div>
</div>
  )
}

export default Project;
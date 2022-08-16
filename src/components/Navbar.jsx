import React ,{useState} from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export const Navbar = () => {
    const [Open,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!Open)

  return (
    <div className='header'>
      <Link to='/'><h1>Avm api</h1></Link>
      <ul className={Open ? 'nav-menu active': 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/project'>Project</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='menu' onClick={toggle}>
        {Open ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars  size={20} style={{color:'#fff'}}/>)}
      </div>
    </div>
  )
}

export default Navbar;
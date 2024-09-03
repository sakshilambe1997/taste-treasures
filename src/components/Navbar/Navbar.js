import React from 'react'
import "./Navbar.css"
import LogoImg from "./logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar-container'>
       <div >
        <img src={LogoImg} className='logo-img'/>
       </div>
       <div>
        <Link  to='/'  className='navbar-menu'>Home</Link>
        <Link  to='/about'  className='navbar-menu'>About</Link>
        <Link  to='/contact'  className='navbar-menu'>Contat</Link>
        <Link  to='/login'  className='navbar-menu'>login</Link>
        <Link  to='/signup'  className='navbar-menu'>Signup</Link>
       </div>
    </div>
    </>
  )
}

export default Navbar
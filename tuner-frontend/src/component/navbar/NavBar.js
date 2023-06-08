import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>Tuner</h1>
      <input type='text' placeholder='Search'/>
      <div className='buttons'>
      <span>Login</span>
      <span>|</span>
      <span>Register</span>
      </div>
    </div>
  )
}

export default NavBar

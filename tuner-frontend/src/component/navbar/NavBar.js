import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h2>Tuner</h2>
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

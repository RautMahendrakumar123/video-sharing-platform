import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  let navigate = useNavigate()
  const newpage = (e) => {
    if (e.key === 'Enter') {
      navigate("/search")
    }
  }
  return (
    <div className='navbar'>
      <h2>Tuner</h2>
      <input type='text' placeholder='Search' onKeyDown={newpage} />
      <div className='buttons'>
        <Link to='/signin'><span>Login</span></Link>
        <span>|</span>
        <Link to='/Register'><span>Register</span></Link>
      </div>
    </div>
  )
}

export default NavBar

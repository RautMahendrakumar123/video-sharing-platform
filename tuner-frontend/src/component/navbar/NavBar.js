import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Upload from '../Upload/Upload';

const NavBar = () => {
  const token=localStorage.getItem("token");

const [toggle, settoggle] = useState(false);
const [open, setOpen] = useState(false);

useEffect(() => {
  if (token) {
    settoggle(true);
  } else {
    settoggle(false);
  }
}, [token])


  let navigate = useNavigate()
  const newpage = (e) => {
    if (e.key === 'Enter') {
      navigate("/Search")
    }
  }
  return (
    <>

    {!toggle? <div className='navbar'>
      <Link to={'/'}><h2>Tuner</h2></Link>
      <input type='text' placeholder='Search' onKeyDown={newpage} />
      <div className='buttons'>
        <Link to='/signin'><span>Login</span></Link>
        <span>|</span>
        <Link to='/Register'><span>Register</span></Link>
      </div>
    </div> :
     <div className='navbar'>
     <Link to={'/'}><h2>Tuner</h2></Link>
     <input type='text' placeholder='Search' onKeyDown={newpage} />
     <div className='buttons'>
       <Link to='/signin'><span>My videos</span></Link>
       <span>|</span>
       <span style={{cursor:'pointer'}} onClick={()=>{setOpen(true)}}>Upload</span>
       <span>|</span>
       <span>Sign out</span>
     </div>
   </div>}
   {open && <Upload setOpen={setOpen}/>}
    </>
  )
}

export default NavBar

import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
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

  const signout = ()=>{

    localStorage.removeItem("token")
    settoggle(false)
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
       <span onClick={()=>{
 navigate('/myvideos')
       }}>My videos</span>
       <span>|</span>
       <span style={{cursor:'pointer'}} onClick={()=>{setOpen(true)}}>Upload</span>
       <span>|</span>
       <span onClick={signout} style={{cursor:"pointer"}}>Sign out</span>
     </div>
   </div>}
   {open && <Upload setOpen={setOpen}/>}
    </>
  )
}

export default NavBar

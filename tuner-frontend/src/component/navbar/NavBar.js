import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Upload from '../Upload/Upload';
import{context} from '../../Context/Context'

const NavBar = () => {
  const {inputs, setInputs} = useContext(context)

const [open, setOpen] = useState(false);
  let navigate = useNavigate()
  const newpage = (e) => {
    if (e.key === 'Enter') {
      navigate("/Search")
    }
  }
  const signout = ()=>{
    localStorage.removeItem("token")
    window.location.reload(true);
   
    setOpen(false);
  }
  return (
    <>
    {!localStorage.getItem('token')
    ? <div className='navbar'>
      <Link to={'/'}><h2>Tuner</h2></Link>
      <input value={inputs} onChange={(e)=>{setInputs(e.target.value)}} type='text' placeholder='Search' onKeyDown={newpage} />
      <div className='buttons'>
        <Link to='/signin'><span>Login</span></Link>
        <span>|</span>
        <Link to='/Register'><span>Register</span></Link>
      </div>
    </div> :
     <div className='navbar'>
     <Link to={'/'}><h2>Tuner</h2></Link>
     <input type='text' value={inputs} onChange={(e)=>{setInputs(e.target.value)}} placeholder='Search' onKeyDown={newpage} />
     <div className='buttons'>
       <span style={{cursor:'pointer'}} onClick={()=>{
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

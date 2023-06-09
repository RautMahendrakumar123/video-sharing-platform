
import React, { useState } from 'react'
import './signin.css'


const SignIn = () => {
  const [formdata,setFormdata]=useState({
    email:"",
    password:"",
  })

  const handlechange=(e)=>{
setFormdata({
  ...formdata,
  [e.target.name]:e.target.value
})
  }

  const formsubmit = async (e) =>{
    e.preventDefault()
   
    await fetch(`http://localhost:8080/signin`,{
      method:"POST",
      headers:{},
      body:formdata
    })
    .then(res=>res.json())
  }


  return (
    <div className='main-container'>
      <div className='left-signin'>
        <div><h1>Tuner</h1></div>
        <div><h3>Enjoy Multiple videos at one place</h3></div>
        <div><p>Register</p></div>
      </div>
      <div className='right-signin'>
        <h2 >Sign In</h2>
        <p>Sign in to continue access pages</p>


        <form onSubmit={formsubmit} encType='multipart/form-data'>
          <div>
            <input type='text' placeholder='Email' 
            name='email'
            value={formdata.email}
            onChange={handlechange}
            />
          </div>
          
          <div>
            <input type='text' placeholder='Password' 
            name='password'
            value={formdata.password}
            onChange={handlechange}
            />
          </div>
         
        </form>
      </div>

    </div>

  )
}

export default SignIn

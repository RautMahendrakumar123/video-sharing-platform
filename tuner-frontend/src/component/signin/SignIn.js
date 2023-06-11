
import React, { useState } from 'react'
import './signin.css'
import { useNavigate}  from 'react-router-dom'


const SignIn = () => {

const Navigate=useNavigate()

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

  const formsubmit =  (e) =>{
    e.preventDefault()
   
    fetch(`http://localhost:8080/signin`,{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formdata)
    })
    .then(res=>res.json()).then((data)=>{
     
      if(!data.error){
        localStorage.setItem('token',data.token)
          window.alert('Logged in Successfully')
        Navigate("/")
      }
      else{
        window.alert('Bad Credentials')
      }
      
    })
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
            <input type='password' placeholder='Password' 
            name='password'
            value={formdata.password}
            onChange={handlechange}
            />
          </div>
          <button type='submit' className='submit-button' >Sign In</button>
        </form>
      </div>

    </div>

  )
}

export default SignIn

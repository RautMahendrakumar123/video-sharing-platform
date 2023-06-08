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
        <div><h1 style={{ fontSize: '120px', position: 'relative', top: '150px', textAlign: 'left' }}>Tuner</h1></div>
        <div><h3 style={{ fontSize: '35px', position: 'relative', top: '100px', textAlign: 'left', width: '390px', fontWeight: '400', left: '10px', color: '#FFFFFF' }}>Enjoy Multiple videos at one place</h3></div>
        <div><p style={{ fontSize: '20px', position: 'relative', top: '200px', right: '400px', color: '#FFFFFF' }}>Register</p></div>
      </div>
      <div className='right-signin'>
        <h2 style={{fontSize:'40px',fontWeight:'600'}}>Sign In</h2>
        <p>Sign in to continue access pages</p>


        <form onSubmit={formsubmit} encType='multipart/form-data'>
          <div>
            <input type='text' placeholder='Email' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px',}}
            name='email'
            value={formdata.email}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>
          
          <div>
            <input type='text' placeholder='Password' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px'}}
            name='password'
            value={formdata.password}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>
         
        </form>
      </div>

    </div>

  )
}

export default SignIn

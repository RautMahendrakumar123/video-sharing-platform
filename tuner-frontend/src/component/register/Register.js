import React from 'react'
import "./register.css"
import { useState } from 'react'

const Register = () => {
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    phone:"",
    profession:"",
    password:"",
    confirmpassword:""
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
    <div>
        <div className='main-container'>
      <div className='left-signin'>
        <div><h1 style={{ fontSize: '120px', position: 'relative', top: '150px', textAlign: 'left' }}>Tuner</h1></div>
        <div><h3 style={{ fontSize: '35px', position: 'relative', top: '100px', textAlign: 'left', width: '390px', fontWeight: '400', left: '10px', color: '#FFFFFF' }}>Enjoy Multiple videos at one place</h3></div>
      </div>
      <div className='right-signin'>
        <h2 style={{fontSize:'40px',fontWeight:'600'}}>Register</h2>
        <p>Register to continue access pages</p>


        <form onSubmit={formsubmit} encType='multipart/form-data'>

        <div>
            <input type='text' placeholder='name' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px',}}
            name='name'
            value={formdata.name}
            onChange={handlechange}
            />
            <hr style={{width:'340px',marginBottom:"8px"}}/>
          </div>

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
            <input type='text' placeholder='phone' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px'}}
            name='phone'
            value={formdata.phone}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>

          <div>
            <input type='text' placeholder='profession' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px',}}
            name='profession'
            value={formdata.profession}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>

          <div>
            <input type='password' placeholder='password' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px',}}
            name='password'
            value={formdata.password}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>

          <div>
            <input type='password' placeholder='confirmpassword' 
            style={{backgroundColor:'#0F121FF5',color:'#FFFFFF',border:'none',width:'340px',}}
            name='confirmpassword'
            value={formdata.password}
            onChange={handlechange}
            />
            <hr style={{width:'340px'}}/>
          </div>
         
        </form>
      </div>

    </div>
    </div>
  )
}

export default Register

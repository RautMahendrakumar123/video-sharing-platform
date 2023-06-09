import React from 'react'
import "./register.css"
import { useState } from 'react'

const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmpassword: "",
  })

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const formsubmit = async (e) => {
    e.preventDefault()

    await fetch(`http://localhost:8080/signin`, {
      method: "POST",
      headers: {},
      body: formdata
    })
      .then(res => res.json())
  }

  return (
    <div>
      <div className='main-container'>
        <div className='left-signin'>
          <div><h1>Tuner</h1></div>
          <div><h3 >Enjoy Multiple videos at one place</h3></div>
        </div>
        <div className='right-signin'>
          <h2 >Register</h2>
          <p >Register to continue access pages</p>

         
          <form onSubmit={formsubmit} encType='multipart/form-data'>
          <div className='select-image' >
            <span style={{fontSize:"1.2em"}}>+</span>
              <input type="file"  />
            </div>
            <div>
              <input type='text' placeholder='Name'
                name='name'
                value={formdata.name}
                onChange={handlechange}
              />
            </div>
            <div>
              <input type='text' placeholder='Email'

                name='email'
                value={formdata.email}
                onChange={handlechange}
              />
            </div>
            <div>
              <input type='text' placeholder='Phone'
                name='phone'
                value={formdata.phone}
                onChange={handlechange}
              />
            </div>
            <div>
              <input type='text' placeholder='Profession'
                name='profession'
                value={formdata.profession}
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
            <div>
              <input type='password' placeholder='Confirmpassword'
                name='confirmpassword'
                value={formdata.password}
                onChange={handlechange}
              />
            </div>
            <button className='submit-button' >Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register

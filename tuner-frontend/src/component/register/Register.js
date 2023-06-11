import React from 'react'
import "./register.css"
import { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import {useNavigate}  from 'react-router-dom'

const Register = () => {
  const Navigate = useNavigate()
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
const [err, seterr] = useState("")

const [success, setsuccess] = useState("")

const [errtoggle, seterrtoggle] = useState(false);
const [suctoggle, setsuctoggle] = useState(false);

  const formsubmit =  (e) => {
    e.preventDefault()
// console.log(formdata)
     fetch(`https://tuner-backend-azda.onrender.com/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata)
    })
      .then(res => res.json()).then((data)=>{
        console.log(data);
        if(data.error){
          seterr(data.error);
          seterrtoggle(true);
          setsuctoggle(false)
        }
        else{
          setsuccess(data.message);
          setsuctoggle(true)
          seterrtoggle(false)
          setTimeout(() => {
           Navigate('/Signin') 
          }, 2000);
        }
      })
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
          {errtoggle && <Toast
          className="d-inline-block m-1"
          // bg={variant.toLowerCase()}
          // key={idx}
          style={{backgroundColor:'red', color: 'white', width: '300px'}}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
        
          </Toast.Header>
          <Toast.Body >
            {err}
          </Toast.Body>
        </Toast>}
      {suctoggle &&  <Toast
          className="d-inline-block m-1"
          // bg={variant.toLowerCase()}
          // key={idx}
          style={{backgroundColor:'green', color: 'white', width: '300px', position: 'relative', left:'30px'}}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
          </Toast.Header>
          <Toast.Body >
            {success}
          </Toast.Body>
        </Toast>}
          <form onSubmit={formsubmit} encType='multipart/form-data'>
          {/* <div className='select-image' >
            <span style={{fontSize:"1.2em"}}>+</span>
              <input type="file"  />
            </div> */}
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
                value={formdata.confirmpassword}
                onChange={handlechange}
              />
            </div>
            <button type='submit' className='submit-button' >Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register

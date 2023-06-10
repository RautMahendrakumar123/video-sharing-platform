import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './component/navbar/NavBar'
import Landing from './component/Landing/Landing'
import SignIn from './component/signin/SignIn'
import Register from './component/register/Register'


const Router = () => {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/Signin' element={<SignIn />}/>
    <Route path='/Register' element={<Register />}/>
    {/* <Route path='/Upload' element={<Upload />}/> */}
    {/* <Route path='/' element={<Landing />}/> */}
   </Routes>
   </BrowserRouter>
  )
}

export default Router

import React, { useContext } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './component/navbar/NavBar'
import Landing from './component/Landing/Landing'
import SignIn from './component/signin/SignIn'
import Register from './component/register/Register'
import Search from "./component/search/Search"
import MyVideos from './component/myVideos/MyVideos'

import ContextPro from './Context/Context';
import PlayVideo from './component/playVideo/PlayVideo'
import { context } from './Context/Context'
const Router = () => {
  // const {playvideo}=useContext(context)
  return (
   
   <BrowserRouter>
   <ContextPro >
   <NavBar />
   <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/Signin' element={<SignIn />}/>
    <Route path='/Register' element={<Register />}/>
    <Route path='/Search' element={<Search />}/>
    <Route path='/myvideos' element={<MyVideos />}/>
    <Route path='/Video' element={<PlayVideo />}/>
   </Routes>
   </ContextPro>
 
   </BrowserRouter>
  
  )
}

export default Router

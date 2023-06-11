import React, { useState } from 'react'
import "./cards.css"
import { useContext } from 'react'
import { context } from '../../Context/Context'
import { Link } from 'react-router-dom'

const Cards = ({obj}) => {
  const {playvideo,setPlayVideo}=useContext(context) 
  return (
<div style={{height:"160px",width:"16.5em",marginBottom:"30px"}}>
,<Link to="/Video"><img style={{borderRadius:"5px"}} onClick={()=>setPlayVideo(obj.videoUrl)} height="100%" width="100%" src={obj.imgUrl}  /></Link>
 </div>
  )
}

export default Cards

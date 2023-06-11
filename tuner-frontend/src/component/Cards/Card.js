import React, { useState } from 'react'
import "./cards.css"
import { useContext } from 'react'
import { context } from '../../Context/Context'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Cards = ({obj}) => {
 const navigate = useNavigate()
  const {playvideo,setPlayVideo,show,setSelect}=useContext(context) 

  return (
<div className='card-container' style={{height:"160px",width:"16.5em",marginBottom:"30px"}}>
<img style={{borderRadius:"5px"}} onClick={()=>{if(!show){
navigate('/Video')
setPlayVideo(obj.videoUrl)
} else{
  setSelect(obj)
}
}} height="100%" width="100%" src={obj.imgUrl}  />
<h3>{obj.title}</h3>
 </div>
  )
}

export default Cards

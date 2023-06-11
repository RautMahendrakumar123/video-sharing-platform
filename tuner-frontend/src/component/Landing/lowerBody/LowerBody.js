import React, { useContext, useEffect, useState } from 'react'
import Cards from '../../Cards/Card'
import "./lowerbody.css"
import {context} from '../../../Context/Context'


const LowerBody = ({data,setData}) => {
 const {arr,setArray,show,setShow} = useContext(context)
  useEffect(()=>{
   fetch('http://localhost:8080/home')
   .then(res=>res.json())
   .then(result=>{
    setShow(false)
    setArray(result)
   })
  },[])
  return (<>
    <div className='view'>
      <p>Recent</p>
      <p style={{color:"#C4B4F8", cursor:'pointer'}} onClick={()=>{
        setData(!data)
      }} >ViewAll</p>
    </div>
<div className='lowerbody-container'>
  {
    arr.map((ele, i)=>{
      if(i<4){
      return(

      
        <Cards obj={ele}/>
      )
      }
    })
  }
  
   </div>
   </>
  

  )
}

export default LowerBody

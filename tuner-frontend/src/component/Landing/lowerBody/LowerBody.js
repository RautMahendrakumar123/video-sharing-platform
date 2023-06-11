import React, { useEffect, useState } from 'react'
import Cards from '../../Cards/Card'
import "./lowerbody.css"

const LowerBody = ({data,setData}) => {
  const [arr,setArr]=useState([])
  useEffect(()=>{
   fetch('http://localhost:8080/home')
   .then(res=>res.json())
   .then(result=>{
    setArr(result)
   })
  },[])
  return (<>
    <div className='view'>
      <p>Recent</p>
      <p style={{color:"#C4B4F8"}} onClick={()=>{
        setData(!data)
      }} >ViewAll</p>
    </div>
<div className='lowerbody-container'>
  {
    arr.map(ele=>{
      return(
        <Cards obj={ele}/>
      )
    })
  }
  
   </div>
   </>
  

  )
}

export default LowerBody

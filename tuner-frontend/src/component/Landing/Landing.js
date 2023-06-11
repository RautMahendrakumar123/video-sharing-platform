import React, { useContext, useState } from 'react'
import UpperBody from './upperBody/UpperBody'
import LowerBody from './lowerBody/LowerBody'
import Viewall from '../Viewall/Viewall'


const Landing = () => {
  const [data,setData]=useState(false)
  
  return (
  <div style={{height:"800px"}}>
    {data && <Viewall data={data} setData={setData} />}
    
   {!data && <><UpperBody />
  <LowerBody data={data} setData={setData} /></>}
  </div>
  )
}

export default Landing

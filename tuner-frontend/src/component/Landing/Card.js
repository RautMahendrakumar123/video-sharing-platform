import React from 'react'
import "./cards.css"

const Cards = ({url}) => {
  return (
      
 <div style={{height:"160px",width:"16.5em",marginBottom:"30px"}}>
<img style={{borderRadius:"5px"}} height="100%" width="100%" src={url} />
 </div>

  )
}

export default Cards

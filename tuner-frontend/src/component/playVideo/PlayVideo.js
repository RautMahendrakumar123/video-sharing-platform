import React, { useEffect } from 'react'
import "./PlayVideo.css"
import { useContext } from 'react'
import { context } from '../../Context/Context'
import { useParams } from 'react-router-dom'
import Cards from '../Cards/Card'
function PlayVideo() {
  const params=useParams()
  const {playvideo,setPlayVideo,arr,setArray,setShow}=useContext(context) 

  return (
    <div className='DisplayVideo'>
      <div className='videoBox'>
        <video controls autoPlay src={playvideo.videoUrl}></video>
        <h2>
          {playvideo.title}
        </h2>
        <div style={{height:"0.5px",backgroundColor:"white"}}></div>
        <p>{playvideo.desc}</p>
      </div>
      <div className='suggession'>
        {arr.map((ele,i)=>{
          if(i<3){
            return(
              <Cards obj={ele} />
              // <img height="170px" width="350px" controls autoPlay src={ele.imgUrl}></img>
            )
          }
        })}
      </div>
    </div>
  )
}

export default PlayVideo

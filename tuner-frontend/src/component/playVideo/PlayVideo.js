import React from 'react'
import "./PlayVideo.css"
import { useContext } from 'react'
import { context } from '../../Context/Context'
function PlayVideo() {
  const {playvideo,setPlayVideo}=useContext(context) 
  return (
    <div className='DisplayVideo'>
      <div className='videoBox'>
        <video controls autoPlay src={playvideo}></video>
      </div>
    </div>
  )
}

export default PlayVideo

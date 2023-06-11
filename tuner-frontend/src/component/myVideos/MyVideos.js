import React, { useContext, useEffect, useState } from 'react'
import "./myvideos.css"
import Cards from '../Cards/Card'
import{context} from '../../Context/Context'

const MyVideos = () => {
 

const {myvideo, setMyvid,select,setShow} = useContext(context)

  useEffect(() => {
    console.log('hello from my vid')
    fetch('http://localhost:8080/myvideos', {
      method: 'get',
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(result => {setMyvid(result);setShow(true)})
  }, [])

  
 const deleteVideo=(id)=>{
  fetch( `http://localhost:8080/myvideos/${id}`,{
    method:'DELETE'
  })
  .then(res=>res.json())
  .then(res=>console.log(res))
  window.location.reload()
 }

  return <>
    <div className='container'>
      <div className='left-side'>
        <div className='heading'>
          <div style={{ color: 'white' }}>My Videos</div>
          <div style={{ color: 'white' }}> Recent</div>
        </div>
        <div className='thumbnail'>
          {
            myvideo.map(ele => {
              
              return (
                <Cards obj={ele} />
              )
            })
          }
        </div>

      </div>
      <div className='right-side'>
        <div className='image'>
          
          <video src={select.videoUrl} 
         controls width='100%' height='60%' />
        </div>
        <div className='right-lower'>
          <div className='head'>
            <p className='main-heading'>{select.title}</p>
            <p>10 Jan 2020</p>
            <p>14 views</p>
            <p>{select.views}</p>
          </div>
       
          <div className='description'>
            <p>description</p>
            <p>
             {select.desc}
            </p>
          </div>
     
          <div className='dropdown'>
            <div className='category'>
             
              {select.category}
            </div>
            <div className='visibility'>
              {select.visibility}
             
            </div>
            
          </div>

          <div className='buttons'>
            <button className='btn1' onClick={()=>{deleteVideo(select._id)}}>Delete</button>
            
          </div>
        </div>


      </div>

    </div>
  </>
}
export default MyVideos

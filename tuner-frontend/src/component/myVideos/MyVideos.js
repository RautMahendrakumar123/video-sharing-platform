import React, { useContext, useEffect, useState } from 'react'
import "./myvideos.css"
import Cards from '../Cards/Card'
import{context} from '../../Context/Context'

const MyVideos = () => {
 

const {myvideo, setMyvid} = useContext(context)

  useEffect(() => {
    console.log('hello from my vid')
    fetch('http://localhost:8080/myvideos', {
      method: 'get',
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(result => setMyvid(result))
  }, [])

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
          <img src='https://th.bing.com/th/id/OIP.i-PuW00dHnEEYqeUKLdQiAHaEz?pid=ImgDet&rs=1' width='100%' height='60%' />
        </div>
        <div className='right-lower'>
          <div className='head'>
            <p className='main-heading'>Godzilla Attack in the city</p>
            <p>10 Jan 2020</p>
            <p>14 views</p>
            <p>200 views</p>
          </div>
       
          <div className='description'>
            <p>description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
     
          <div className='dropdown'>
            <div className='category'>
              <select name="category" id="Catergory">
                <option >Category</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Movie">Movie</option>
              </select>
            </div>
            <div className='visibility'>

              <select name="visibility" id="Public">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className='visibility'>

              <select name="visibility" id="Public">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>

          <div className='buttons'>
            <button className='btn1'>Delete</button>
            <button className='btn2'>Save</button>
          </div>
        </div>


      </div>

    </div>
  </>
}
export default MyVideos

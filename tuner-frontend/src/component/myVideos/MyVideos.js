import React from 'react'
import "./myvideos.css"
import Cards from '../Cards/Card'

const MyVideos = () => {
    const arr=["https://bloody-disgusting.com/wp-content/uploads/2014/03/godzilla-banner2.jpg",
    "https://e0.pxfuel.com/wallpapers/182/151/desktop-wallpaper-godzilla-king-of-the-monsters-banner-cartoon-godzilla.jpg",
    "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg",
    "https://upload.wikimedia.org/wikipedia/en/0/07/Rana_Naidu.jpg","https://bloody-disgusting.com/wp-content/uploads/2014/03/godzilla-banner2.jpg",
    "https://e0.pxfuel.com/wallpapers/182/151/desktop-wallpaper-godzilla-king-of-the-monsters-banner-cartoon-godzilla.jpg",
    "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg",
    "https://upload.wikimedia.org/wikipedia/en/0/07/Rana_Naidu.jpg","https://bloody-disgusting.com/wp-content/uploads/2014/03/godzilla-banner2.jpg",
    "https://e0.pxfuel.com/wallpapers/182/151/desktop-wallpaper-godzilla-king-of-the-monsters-banner-cartoon-godzilla.jpg",
    "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg",
    "https://upload.wikimedia.org/wikipedia/en/0/07/Rana_Naidu.jpg"]
 
  return <>
  <div className='container'>
    <div className='left-side'>
        <div className='heading'>
            <div style={{color:'white'}}>My Videos</div>
            <div style={{color:'white'}}> Recent</div>
        </div>
        <div className='thumbnail'>
        {
    arr.map(ele=>{
      return(
        <Cards url={ele}/>
      )
    })
  }
        </div>
    
    </div>
    <div className='right-side'></div>

  </div>
  </>
}

export default MyVideos

import React from 'react'
import Cards from '../../component/Cards/Card'
import './search.css'

const Search = () => {

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
  return (
    <div className='lowerbody-container'>
       {
    arr.map(ele=>{
      return(
        <Cards url={ele}/>
      )
    })
  }
    </div>
  )
}

export default Search
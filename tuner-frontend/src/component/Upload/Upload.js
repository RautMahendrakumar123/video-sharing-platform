import React, { useEffect } from 'react'
import './upload.css'
import {BsCloudUpload} from "react-icons/bs"
import { useState } from 'react'

const Upload = ({ setOpen }) => {
    
    
    const [upload,setUpload]=useState({
        title:"",
        desc:"",
        imgUrl:"",
        videoUrl:"",
        views:"",
        category:"",
        visibility:""
    })
    const [image,setImage]=useState('')
    const [video,setVideo]=useState('')
    

    useEffect(()=>{
        console.log(upload)
        if(image && video){
            fetch("http://localhost:8080/upload",{
                method:"POST",
                headers:{
                   "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ...upload,
                    imgUrl:image,
                    videoUrl:video

                })
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
            })
        }
        
    },[video,image])

    
       
    
    
   
    const handleChange = (e) => {
        setUpload((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const fileChange=(e)=>{
        setUpload((prev)=>{
            return {...prev,[e.target.name]:e.target.files[0]}
        })
    }
    const uploadData=()=>{
        // fetch()
    }

    const newpost = () => {
        console.log(upload)
        const videofile=new FormData()
        videofile.append("file", upload.videoUrl)
        videofile.append("upload_preset", "tuner-app")
        videofile.append("cloude_name", "denqqxn5l")
        fetch("https://api.cloudinary.com/v1_1/denqqxn5l/video/upload", {
          method: "POST",
          body: videofile
        }).then(resp =>
          resp.json()
        ).then(res => {
          console.log(res)
          setVideo(res.url)

          const data = new FormData()
          data.append("file", upload.imgUrl)
          data.append("upload_preset", "tuner-app")
          data.append("cloude_name", "denqqxn5l")
          fetch("https://api.cloudinary.com/v1_1/denqqxn5l/image/upload", {
            method: "POST",
            body: data
          }).then(resp =>
            resp.json()
          ).then(res => {
              console.log(res)
            setImage(res.url)
            // fetchdata()
          
           
          })
            .catch(err =>
              console.log(err)
            )
           
        })
          .catch(err =>
            console.log(err)
          )
       
      
      }
    
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='heading-div'>

                <div className='Title'>Upload a New Video</div>
                <div className='Close' style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>X</div>
                </div>
            
            <div  className="file-input">
                <input
                name='videoUrl'
                type='file'
                accept='video/*'
                onChange={fileChange}
              
            />
            <BsCloudUpload style={{fontSize:"3.5em"}}/>
            <h2>Drag And Drop To Upload</h2>
            <h3>or browse to chose the file</h3>
            </div>
            <div className='name'>
                <input placeholder='Name'
                    type='text'
                    onChange={handleChange}
                    name='title'
                /> </div>
            <div className='description'> 
                <textarea onChange={handleChange} placeholder='Description' name='desc'></textarea></div>
            
        <div className='bottom-select'>
            <div className='category'>
               
                <select name="category" id="Catergory" onChange={handleChange}>
                    <option >Category</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Movie">Movie</option>
                </select>
            </div>
            <div className='visibility'>
               
                <select name="visibility" id="Public" onChange={handleChange}>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
            </div>
            <div className='upload-thumbnail'>
                <p>upload thumbnail</p>
                <input type='file' 
                onChange={fileChange}
                accept='image/*'
                name='imgUrl'
                />
            </div>
            </div>
            <button onClick={newpost} className='submit'>SUBMIT</button>
            </div>
        </div>
    )

}

export default Upload
import React from 'react'
import './upload.css'

const upload = ({ setOpen }) => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Close' style={{cursor:'pointer'}} onClick={() => setOpen(false)}>X</div>
                <div className='Tiltle'>Upload a New Video</div>
            </div>
            <div><input 
                type='file'
                accept='video/*'
                /></div>
                <div><label>Name</label>
                 <input 
                type='text'
                /></div>
                <div> <label>Description</label>
                <textarea></textarea></div>
            
            <div>
                    <label htmlFor="">Category</label><br />
                    <select name="category" id="Catergory">
                        <option >Category</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Movie">Movie</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Visibility</label><br />
                    <select name="visibility" id="Public">
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <div>
                <label>Thumbnail Image: </label>
                    <input
                        type="file"
                        accept="image/*"
                        
                    />
            </div>
        </div>
    )

}

export default upload
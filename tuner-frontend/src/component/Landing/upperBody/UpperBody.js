import React from 'react'
import "./upperbody.css"

const UpperBody = () => {
    return (<>
        <div className='container'>
            <img src='https://wallpapercave.com/wp/wp2599594.jpg' style={{height:"100%",width:"100%"}}/>
        </div>
        <div className='content'>
            <div>
                <h1 style={{color:"#FFFFFF",fontSize:"2.7em",position:"relative",top:"25px",width:"400px"}}>Godzilla Attack in the city</h1>
            </div>
            <div>
                <span style={{color:"#FFFFFF",fontSize:"1em",margin:'5px 12px',fontWeight:"lighter"}}>10 Jan 2020</span>
                <span style={{color:"#FFFFFF",fontSize:"1em",margin:'5px 12px',fontWeight:"lighter"}}>14 Mins</span>
                <span style={{color:"#FFFFFF",fontSize:"1em",margin:'5px 12px',fontWeight:"lighter"}}>200 Views</span>
            </div>
            <div className='profile'>
                <span><img src='https://cdn.pulse2.com/cdn/2020/05/Mark-Zuckerberg.jpg' height="30px" style={{borderRadius:"999px"}}/></span>
                <span style={{color:"#FFFFFF",fontSize:"1em",position:"relative",bottom:"10px",fontWeight:"lighter"}}>Publisher Name</span>
            </div>
        </div>
    </>
    )
}

export default UpperBody

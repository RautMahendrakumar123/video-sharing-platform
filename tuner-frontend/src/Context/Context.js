const { createContext, useState } = require("react");

export const context=createContext()

const ContextPro=({children})=>{
   const  [arr,setArray]=useState([])
   const [playvideo,setPlayVideo]=useState("")
  
    return(
        <context.Provider value={{arr,setArray,playvideo,setPlayVideo}}>
      {children}
        </context.Provider>
    )
}

export default ContextPro
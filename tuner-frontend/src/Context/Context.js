const { createContext, useState } = require("react");

export const context=createContext()

const ContextPro=({children})=>{
  const[inputs, setInputs] = useState('')
  const[myvideo, setMyvid] = useState([])
   const  [arr,setArray]=useState([])
   const [playvideo,setPlayVideo]=useState("")
  
    return(
        <context.Provider value={{arr,setArray,playvideo,setPlayVideo, inputs, setInputs, myvideo, setMyvid}}>
      {children}
        </context.Provider>
    )
}

export default ContextPro
const { createContext, useState } = require("react");

export const context=createContext()

const ContextPro=({children})=>{
  const[inputs, setInputs] = useState('')
   const  [arr,setArray]=useState([])
   const [playvideo,setPlayVideo]=useState("")
  
    return(
        <context.Provider value={{arr,setArray,playvideo,setPlayVideo, inputs, setInputs}}>
      {children}
        </context.Provider>
    )
}

export default ContextPro
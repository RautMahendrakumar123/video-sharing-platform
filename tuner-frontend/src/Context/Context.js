const { createContext, useState } = require("react");

export const context=createContext()

const ContextPro=({children})=>{
  const[inputs, setInputs] = useState('')
  const[myvideo, setMyvid] = useState([])
   const  [arr,setArray]=useState([])
   const [playvideo,setPlayVideo]=useState("")
   const [select,setSelect]=useState("")
   const [show,setShow]=useState(false)
  
    return(
        <context.Provider value={{arr,setArray,playvideo,setPlayVideo, inputs, setInputs, myvideo, setMyvid,select,setSelect,show,setShow}}>
      {children}
        </context.Provider>
    )
}

export default ContextPro
import React, { useContext, useEffect, useState } from 'react'
import Cards from '../../component/Cards/Card'
import './search.css'
import {context} from '../../Context/Context'

const Search = () => {
const [enter, setEnter]= useState([])
  const {arr,setArray, inputs,setShow} = useContext(context)
 useEffect(() => {
  fetch('http://localhost:8080/home')
  .then(res=>res.json())
  .then(result=>{
    setShow(false)
   setArray(result)})
  const query= [...arr]
  console.log(query)
  const searchItem = query.filter((ele, i)=>{
    
    return(
      ele.title.toLowerCase().includes(inputs.toLowerCase())
    )
  })
  console.log(searchItem)
  setEnter(searchItem)
 }, [inputs])
 
  return (
    <div className='lowerbody-container'>
       {
    enter.map(ele=>{
      return(
        <Cards obj={ele}/>
      )
    })
  }
    </div>
  )
}

export default Search
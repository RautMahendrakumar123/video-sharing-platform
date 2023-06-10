const express=require('express')
const router=express.Router()
const Video =require("../Models/videoModel")

router.post("/upload",async(req,resp)=>{
    console.log(req.body)
    const data=await new Video(req.body)
    await data.save()
    resp.status(200).json({
        status:"saved successfully"    })
    
})

module.exports=router


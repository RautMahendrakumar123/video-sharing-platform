const express=require('express')
const router=express.Router()
const RegisterModel=require("../Models/registerModel")
const bcrypt=require("bcrypt")
const jsonwebtoken=require("jsonwebtoken")

router.post("/signup",async(req,resp)=>{
    console.log(req.body);
    let validatemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
     const validatepass=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
     if(!validatemail.test(req.body.email)){
        return resp.json({ error: "Invalid mail Id or password" })
     }
     if(!validatepass.test(req.body.password)){
        return resp.json({ error: "Password is too weak and it must includes one uniquecharacter, one uppercase, one lowercase and one number" })
     }
    if(req.body.password!=req.body.confirmpassword){
        return resp.status(400).json({
            error:"password does not match"
        })
    }
    if(req.body.confirmpassword){   
    const  saltvalue=await bcrypt.genSalt(8)
    const hashedvalue=await bcrypt.hash(req.body.password,saltvalue)
    const data=new RegisterModel({...req.body,password:hashedvalue,confirmpassword:hashedvalue})

    await data.save()
    resp.status(200).json({
        message:"data saved successfully",
        data:data
    })}
    else{
        resp.status(400).json({
            error:"Please enter all the fields"
        })
    }
})

router.post("/signin",async(req,resp)=>{

    const data= await RegisterModel.findOne({email:req.body.email})
    if(!data){
      return  resp.status(401).json({
            error:"invalid username or password"
        })
    }
    const comparepassword=await bcrypt.compare(req.body.password,data.password)
    if(!comparepassword){
       return resp.status(401).json({
            error:"invalid username or password"
        })
    }
    const token= jsonwebtoken.sign({id:data._id,email:data.email},process.env.SECRET_KEY)
    resp.status(200).json({
        token
    })
})


module.exports=router
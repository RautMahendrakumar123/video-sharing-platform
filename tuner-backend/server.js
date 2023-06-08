const mongoose =require('mongoose')
const express=require('express')
const dotenv=require("dotenv")
const cors=require('cors')
const app=express()
dotenv.config()


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("connected",()=>{
    console.log("data base connection successfull")
})
mongoose.connection.on("error",()=>{
    console.log("connection failed")
})

app.use(require("./Routes/auth"))
app.listen(process.env.PORT,()=>{
    console.log(`server runnig on port ${process.env.PORT}`)
})